import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../navigations/NavigationProps';
import * as Typography from '../constants/Typography';
import * as Colors from '../constants/Colors';
import OTP from '../components/OTP';
import Headers from '../components/Headers';

const ConfirmeOTPScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationProps>();
  const [otp, setOTP] = useState('');
  const [time, setTime] = useState(59);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Headers />,
    });
  }, [navigation]);

  useEffect(() => {
    if (otp.length === 6) {
      navigation.navigate('PinCodeScreen');
    }
  }, [otp, navigation]);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (time > 0) {
        setTime(prevTime => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [time]);

  const onResend = () => {
    setOTP('');
    setTime(59);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>ยืนยันตัวตน</Text>
      <Text style={styles.subTitle}>กรุณากรอกรหัสยืนยันที่เราส่งให้คุณ</Text>
      <Text style={styles.subTitle}>082-XXX-8998</Text>
      <View style={styles.otp}>
        <OTP value={otp} setValue={setOTP} />
      </View>
      <Text style={styles.text}>หากคุณไม่ได้รับรหัส?</Text>
      <View style={styles.resend}>
        <TouchableOpacity onPress={onResend}>
          <Text style={styles.sendOTP}>{`ส่งรหัสใหม่ (${time})`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmeOTPScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.white,
  },
  otp: {
    marginTop: 24,
    marginBottom: 128,
  },
  title: {
    marginVertical: 8,
    ...Typography.textMedi18,
    color: Colors.black,
  },
  subTitle: {
    marginVertical: 2,
    ...Typography.text14,
    color: Colors.black,
  },
  text: {
    textAlign: 'center',
    ...Typography.text14,
    color: Colors.black,
    marginVertical: 2,
  },
  resend: {
    marginVertical: 8,
    alignItems: 'center',
  },
  sendOTP: {
    ...Typography.text14,
    color: Colors.primary,
  },
});
