import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  NavigationProps,
  RouteSettingAuthProps,
} from '../navigations/NavigationProps';
import * as Typography from '../constants/Typography';
import * as Colors from '../constants/Colors';
import Button from '../components/Button';
import Headers from '../components/Headers';
import Fingerprint from '../assets/svg/fingerprint.svg';

const SettingAuthScreen = () => {
  const route = useRoute<RouteSettingAuthProps>();
  const navigation = useNavigation<NavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Headers />,
    });
  }, [navigation]);

  const onTouchId = async () => {};

  const onSkiped = () => {
    navigation.navigate('AuthScreen', {pinCode: route.params?.pinCode || []});
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Touch ID</Text>
      <Text style={styles.text}>ตั้งค่าล็อคอินด้วยลายนิ้วมือ</Text>
      <Text style={styles.text}>เพื่อการเข้าถึงที่รวดเร็วขึ้น</Text>
      <View style={styles.fingerprint}>
        <Fingerprint fill={Colors.primary} width={64} height={64} />
      </View>
      <Button
        title="ตั้งค่าลายนิ้วมือ"
        onPress={onTouchId}
        containerStyle={styles.button}
      />
      <Button
        type={'outlined'}
        title="ข้าม"
        onPress={onSkiped}
        containerStyle={styles.button}
      />
    </View>
  );
};

export default SettingAuthScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.white,
  },
  title: {
    ...Typography.textMedi18,
    color: Colors.black,
    marginVertical: 4,
  },
  text: {
    ...Typography.text14,
    color: Colors.black,
  },
  fingerprint: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 145,
  },
  button: {
    marginVertical: 8,
  },
});
