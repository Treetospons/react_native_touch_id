import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../navigations/NavigationProps';
import * as Typography from '../constants/Typography';
import * as Colors from '../constants/Colors';
import InputText from '../components/InputText';
import Button from '../components/Button';
import Headers from '../components/Headers';

const ForgetPasswordScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationProps>();
  const [email, setEmail] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Headers />,
    });
  }, [navigation]);

  const onConfirmed = () => {
    navigation.navigate('SuccessScreen');
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>ลืมรหัสผ่าน</Text>
      <Text style={styles.text}>
        {'กรอกอีเมลหรือเบอร์โทรศัพท์ที่\nลงทะเบียน'}
      </Text>
      <View style={styles.input}>
        <InputText
          value={email}
          onChangeText={setEmail}
          placeholder="อีเมล / เบอร์โทรศัพท์"
        />
      </View>
      <Button title="ส่ง" onPress={onConfirmed} />
    </View>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.white,
  },
  title: {
    ...Typography.textMedi18,
    color: Colors.black,
  },
  text: {
    ...Typography.text14,
    color: Colors.black,
    marginVertical: 8,
  },
  input: {
    marginVertical: 32,
  },
});
