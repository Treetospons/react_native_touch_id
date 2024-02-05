import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import * as Typography from '../constants/Typography';
import * as Colors from '../constants/Colors';

interface OTPProps {
  value: string;
  setValue: (text: string) => void;
}

const CELL_COUNT = 6;

const OTP = ({value, setValue}: OTPProps) => {
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <View
          key={index}
          onLayout={getCellOnLayoutHandler(index)}
          style={[styles.cell, isFocused && styles.focusCell]}>
          <Text style={styles.text}>
            {symbol.toLowerCase() || (isFocused ? <Cursor /> : null)}
          </Text>
        </View>
      )}
    />
  );
};

export default OTP;

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginTop: 20,
  },
  cell: {
    width: 40,
    height: 40,
    borderBottomWidth: 1,
    borderBottomEndRadius: 8,
    borderBottomColor: Colors.primary,
  },
  text: {
    lineHeight: 38,
    textAlign: 'center',
    ...Typography.textLig26,
    color: Colors.black,
  },
  focusCell: {
    borderBottomColor: Colors.primary,
  },
});
