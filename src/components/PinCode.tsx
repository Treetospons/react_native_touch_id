import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Typography from '../constants/Typography';
import * as Colors from '../constants/Colors';
import DialpadKeypad from './DialpadKeypad';
import DialpadPin from './DialpadPin';

interface PinCodeProps {
  title?: string;
  code: string[];
  setCode: (code: string[]) => void;
  isTouchId?: boolean;
  onTouchId?: () => void;
}

const MAX_PIN: number = 6;

const PinCode = ({
  title,
  code,
  setCode,
  isTouchId = false,
  onTouchId,
}: PinCodeProps) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <DialpadPin
        value={code}
        dialPadLength={MAX_PIN}
        containerStyle={styles.dialpadPinContainer}
      />
      <DialpadKeypad
        value={code}
        setValue={setCode}
        dialPadLength={MAX_PIN}
        isTouchId={isTouchId}
        onTouchId={onTouchId}
      />
    </View>
  );
};

export default PinCode;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    ...Typography.text16,
    color: Colors.black,
  },
  dialpadPinContainer: {
    marginTop: 16,
    marginBottom: 32,
    justifyContent: 'center',
  },
});
