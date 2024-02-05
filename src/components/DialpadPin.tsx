import React from 'react';
import {StyleSheet, TextStyle, View} from 'react-native';
import * as Colors from '../constants/Colors';

interface DialpadPinProps {
  value: string[];
  dialPadLength: number;
  containerStyle?: TextStyle;
}

const DialpadPin = ({
  dialPadLength = 0,
  value,
  containerStyle,
}: DialpadPinProps) => {
  return (
    <View style={[styles.dialPadPinContainer, containerStyle]}>
      {Array(dialPadLength)
        .fill(0)
        .map((_, index) => {
          const isSelected = index <= value.length - 1;
          return (
            <View key={index} style={styles.dialPadPinPoint}>
              <View
                style={[
                  styles.pinContentContainer,
                  !isSelected && styles.pinContentInactive,
                ]}>
                {isSelected && <View style={styles.pinContent} />}
              </View>
            </View>
          );
        })}
    </View>
  );
};

export default DialpadPin;

const styles = StyleSheet.create({
  dialPadPinContainer: {
    flexDirection: 'row',
  },
  dialPadPinPoint: {
    width: 16,
    height: 16,
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: 8,
  },
  pinContentContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  pinContentInactive: {
    borderColor: Colors.primary,
  },
  pinContent: {
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: Colors.primary,
  },
});
