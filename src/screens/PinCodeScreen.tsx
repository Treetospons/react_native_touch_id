import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../navigations/NavigationProps';
import * as Colors from '../constants/Colors';
import PinCode from '../components/PinCode';

const PinCodeScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const [code, setCode] = useState<string[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    if (code.length === 6) {
      navigation.navigate('ConfirmePinCodeScreen', {pinCode: code});
    }
  }, [code, navigation]);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <PinCode title={'ตั้งรหัส PIN CODE'} code={code} setCode={setCode} />
      </View>
    </View>
  );
};

export default PinCodeScreen;

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
