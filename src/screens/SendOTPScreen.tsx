import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../navigations/NavigationProps';
import * as Typography from '../constants/Typography';
import * as Colors from '../constants/Colors';
import Button from '../components/Button';
import Headers from '../components/Headers';

const SendOTPScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Headers />,
    });
  }, [navigation]);

  const onReqOTP = () => {
    navigation.navigate('ConfirmeOTPScreen');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>OTP จะถูกส่งไปยังเบอร์โทรศัพท์</Text>
        <Text style={styles.text}>082-XXX-8998</Text>
        <Button
          title="ขอรหัส OTP"
          onPress={onReqOTP}
          containerStyle={styles.button}
        />
        <Text style={styles.decs}>
          กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อเบอร์ 02-XXX-XXXX
        </Text>
      </View>
    </View>
  );
};

export default SendOTPScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    ...Typography.textSemi20,
    color: Colors.black,
  },
  text: {
    textAlign: 'center',
    ...Typography.textMedi16,
    color: Colors.primary,
    marginTop: 16,
    marginBottom: 32,
  },
  button: {
    marginVertical: 16,
  },
  decs: {
    textAlign: 'center',
    ...Typography.textLig12,
    color: Colors.black,
  },
});
