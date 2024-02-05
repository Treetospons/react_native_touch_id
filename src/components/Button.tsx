import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Colors from '../constants/Colors';
import * as Typography from '../constants/Typography';

interface ButtonProps {
  type?: 'ghost' | 'primary' | 'outlined';
  title: string;
  containerStyle?: TextStyle;
  onPress?: () => void;
}

const Button = ({
  title,
  onPress,
  containerStyle,
  type = 'primary',
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          type === 'ghost' && styles.ghost,
          type === 'primary' && styles.primary,
          type === 'outlined' && styles.outlined,
          containerStyle,
        ]}>
        <Text
          style={[
            styles.text,
            type === 'ghost' && styles.textGhost,
            type === 'primary' && styles.textPrimary,
            type === 'outlined' && styles.textOutlined,
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  ghost: {
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  outlined: {
    borderWidth: 0,
  },
  text: {
    ...Typography.textMedi16,
    textAlign: 'center',
  },
  textGhost: {
    color: Colors.primary,
  },
  textPrimary: {
    color: Colors.white,
  },
  textOutlined: {
    color: Colors.primary,
  },
});
