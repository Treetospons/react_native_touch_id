import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  NavigationProps,
  RouteConfirmePinCodeProps,
} from '../navigations/NavigationProps';
import * as Colors from '../constants/Colors';
import PinCode from '../components/PinCode';

const ConfirmePinCodeScreen = () => {
  const route = useRoute<RouteConfirmePinCodeProps>();
  const navigation = useNavigation<NavigationProps>();
  const [code, setCode] = useState<string[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    if (code.length === 6) {
      if (code.toString() === route.params?.pinCode.toString()) {
        navigation.navigate('SettingAuthScreen', {
          pinCode: route.params?.pinCode,
        });
      } else {
        Alert.alert('รหัสผ่านไม่ถูกต้อง');
      }
    }
  }, [code, route, navigation]);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <PinCode title={'ยืนยันรหัส PIN CODE'} code={code} setCode={setCode} />
      </View>
    </View>
  );
};

export default ConfirmePinCodeScreen;

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
});
