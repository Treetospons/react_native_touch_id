import React from 'react';
import {StyleSheet, TextInput, TextStyle} from 'react-native';
import * as Colors from '../constants/Colors';
import * as Typography from '../constants/Typography';

interface TextInputProps {
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  containerStyle?: TextStyle;
  secureTextEntry?: boolean;
}

const InputText = ({
  value,
  onChangeText,
  placeholder,
  containerStyle,
  secureTextEntry = false,
}: TextInputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={[styles.container, containerStyle]}
    />
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    ...Typography.textLig14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
  },
});
