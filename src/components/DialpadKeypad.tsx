import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Typography from '../constants/Typography';
import * as Colors from '../constants/Colors';
import Backspace from '../assets/svg/backspace.svg';
import Fingerprint from '../assets/svg/fingerprint.svg';

interface DialpadKeypadProps {
  value: string[];
  setValue: (value: string[]) => void;
  dialPadLength: number;
  isTouchId?: boolean;
  onTouchId?: () => void;
}

const DialpadKeypad = ({
  value,
  setValue,
  dialPadLength,
  isTouchId = false,
  onTouchId,
}: DialpadKeypadProps) => {
  const dialPadContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'];

  const delDialPad = (prev: string[]): string[] => {
    return prev.slice(0, -1);
  };

  const addDialPad = (prev: string[], val: string): string[] => {
    return [...prev, val];
  };

  return (
    <FlatList
      data={dialPadContent}
      numColumns={3}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.contentContainerStyle}
      columnWrapperStyle={styles.columnWrapperStyle}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            disabled={item === '' && !isTouchId}
            onPress={() => {
              if (item === 'del') {
                setValue(delDialPad(value));
              } else if (item === '' && isTouchId) {
                onTouchId && onTouchId();
              } else {
                if (value.length <= dialPadLength - 1) {
                  setValue(addDialPad(value, item.toString()));
                }
              }
            }}>
            <View
              style={[
                styles.dialPadContainer,
                item !== '' && styles.dialPadBorder,
                isTouchId && styles.dialPadBorder,
              ]}>
              {item === 'del' ? (
                <Backspace fill={Colors.primary} width={32} height={32} />
              ) : item === '' && isTouchId ? (
                <Fingerprint fill={Colors.primary} width={32} height={32} />
              ) : (
                <Text style={styles.dialPadText}>{item}</Text>
              )}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default DialpadKeypad;

const styles = StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    justifyContent: 'center',
  },
  columnWrapperStyle: {
    justifyContent: 'center',
  },
  dialPadContainer: {
    width: 64,
    height: 64,
    margin: 16,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  dialPadBorder: {
    borderColor: Colors.primary,
    borderWidth: 1,
    backgroundColor: Colors.white,
  },
  dialPadText: {
    ...Typography.textLig32,
    color: Colors.primary,
    borderColor: Colors.primary,
    textAlign: 'center',
  },
});
