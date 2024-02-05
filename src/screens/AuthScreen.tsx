import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  NavigationProps,
  RouteSettingAuthProps,
} from '../navigations/NavigationProps';
import * as Typography from '../constants/Typography';
import * as Colors from '../constants/Colors';
import PinCode from '../components/PinCode';
import FingerprintScanner from 'react-native-fingerprint-scanner';

const AuthScreen = () => {
  const route = useRoute<RouteSettingAuthProps>();
  const navigation = useNavigation<NavigationProps>();
  const [code, setCode] = useState<string[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    const initail = async () => {
      await FingerprintScanner.isSensorAvailable()
        .then(fingerprint => {
          if (
            fingerprint === 'Touch ID' ||
            fingerprint === 'Face ID' ||
            fingerprint === 'Biometrics'
          ) {
            Fingerprint();
          }
        })
        .catch(error => {
          console.log('error:', error.message);
        });
    };

    initail();
  }, []);

  useEffect(() => {
    if (code.length === 6) {
      if (code.toString() === route.params?.pinCode.toString()) {
        Alert.alert('รหัสผ่านถูกต้อง');
      } else {
        Alert.alert('รหัสผ่านไม่ถูกต้อง');
      }
    }
  }, [code, route, navigation]);

  const onTouchId = async () => {
    Fingerprint();
  };

  const Fingerprint = () => {
    const config = {
      title: 'Touch ID for "CGS Application"',
      subTitle: 'เข้าใช้งานด้วย Touch ID หรือ\nยกเลิกเพื่อกลับไปใช้ PIN',
      cancelButton: 'ยกเลิก',
    };
    const configIOS = {
      description: 'Touch ID for "CGS Application"',
    };
    FingerprintScanner.authenticate(Platform.OS === 'ios' ? configIOS : config)
      .then(() => {
        Alert.alert('รหัสผ่านถูกต้อง');
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  const onForget = () => {
    navigation.navigate('ForgetPasswordScreen');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <PinCode
          title="กรอกรหัสผ่าน PIN"
          code={code}
          setCode={setCode}
          isTouchId={true}
          onTouchId={onTouchId}
        />
        <View style={styles.forget}>
          <TouchableOpacity onPress={onForget}>
            <Text style={styles.text}>ลืมรหัสผ่าน?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AuthScreen;

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
  forget: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...Typography.text14,
    color: Colors.black,
    textAlign: 'center',
  },
});
