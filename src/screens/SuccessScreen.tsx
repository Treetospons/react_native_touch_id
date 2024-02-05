import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../navigations/NavigationProps';
import * as Typography from '../constants/Typography';
import * as Colors from '../constants/Colors';
import Button from '../components/Button';
import CheckCircle from '../assets/svg/check_circle.svg';

const SuccessScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const onSuccess = () => {
    navigation.navigate('SingInScreen');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <CheckCircle fill={Colors.primary} width={128} height={128} />
        </View>
        <Text style={styles.title}>สำเร็จ</Text>
        <Text style={styles.text}>รีเซ็ตรหัสผ่านของคุณสำเร็จแล้ว</Text>
        <Button
          title="ตกลง"
          onPress={onSuccess}
          containerStyle={styles.button}
        />
      </View>
    </View>
  );
};

export default SuccessScreen;

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
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  title: {
    textAlign: 'center',
    ...Typography.textMedi18,
    color: Colors.black,
  },
  text: {
    textAlign: 'center',
    ...Typography.text14,
    color: Colors.black,
    marginVertical: 16,
  },
  button: {
    marginVertical: 8,
  },
});
