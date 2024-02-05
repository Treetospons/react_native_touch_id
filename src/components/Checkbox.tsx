import React from 'react';
import {TextStyle, View} from 'react-native';
import * as Colors from '../constants/Colors';
import CheckBox from '../assets/svg/check_box.svg';
import CheckBoxOutlineBlank from '../assets/svg/check_box_outline_blank.svg';

interface CheckBoxProps {
  isActive: boolean;
  containerStyle?: TextStyle;
}

const Checkbox = ({isActive = false, containerStyle}: CheckBoxProps) => {
  return (
    <View style={[containerStyle]}>
      {isActive ? (
        <CheckBox fill={Colors.primary} />
      ) : (
        <CheckBoxOutlineBlank fill={Colors.primary} />
      )}
    </View>
  );
};

export default Checkbox;
