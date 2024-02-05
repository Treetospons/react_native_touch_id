import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../navigations/NavigationProps';
import * as Typography from '../constants/Typography';
import * as Colors from '../constants/Colors';
import InputText from '../components/InputText';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';

const SingInScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationProps>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isCheckbox, setIsCheckbox] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const onSaved = () => {
    setIsCheckbox(!isCheckbox);
  };

  const onFogetPassword = () => {
    navigation.navigate('ForgetPasswordScreen');
  };

  const onSingin = () => {
    navigation.navigate('SendOTPScreen');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.input}>
        <InputText
          value={username}
          onChangeText={setUsername}
          placeholder="ชื่อผู้ใช้งาน"
        />
      </View>
      <View style={styles.input}>
        <InputText
          value={password}
          onChangeText={setPassword}
          placeholder="รหัสผ่าน"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={onSaved}>
          <View style={styles.checkbox}>
            <Checkbox
              isActive={isCheckbox}
              containerStyle={styles.conatinerCheckbox}
            />
            <Text style={styles.text}>บันทึกการเข้าสู่ระบบ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onFogetPassword}>
          <Text style={styles.text}>ลืมรหัสผ่าน?</Text>
        </TouchableOpacity>
      </View>
      <Button
        containerStyle={styles.button}
        title="เข้าสู่ระบบ"
        onPress={onSingin}
      />
      <View style={styles.content}>
        <View style={styles.line} />
        <Text style={styles.text}>ไม่มีบัญชีผู้ใช้</Text>
        <View style={styles.line} />
      </View>
      <Button
        type="ghost"
        containerStyle={styles.button}
        title="เปิดบัญชีเพื่อลงทะเบียนบัญชีผู้ใช้"
      />
    </View>
  );
};

export default SingInScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.white,
    justifyContent: 'flex-end',
  },
  input: {
    marginVertical: 16,
  },
  content: {
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  conatinerCheckbox: {marginRight: 4},
  text: {
    ...Typography.textLig14,
  },
  line: {
    alignSelf: 'center',
    width: '35%',
    height: 1,
    backgroundColor: Colors.gray,
  },
  button: {
    marginVertical: 16,
  },
});
