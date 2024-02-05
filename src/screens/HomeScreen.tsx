import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../navigations/NavigationProps';
import * as Typography from '../constants/Typography';
import * as Colors from '../constants/Colors';
import Button from '../components/Button';

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const onHandleLanguage = (lang: string) => {
    navigation.navigate('RegulationScreen', {lang: lang});
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>ยินดีต้อนรับ</Text>
        <Text style={styles.subTitle}>กรุณาเลือกภาษา</Text>
        <View style={styles.footer}>
          <Button
            title="English"
            containerStyle={styles.button}
            onPress={() => onHandleLanguage('en')}
          />
          <Button
            title="ไทย"
            containerStyle={styles.button}
            onPress={() => onHandleLanguage('th')}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

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
    ...Typography.textMedi18,
    color: Colors.black,
    marginVertical: 2,
  },
  subTitle: {
    ...Typography.textLig14,
    color: Colors.gray,
    marginVertical: 2,
  },
  footer: {
    marginTop: 60,
  },
  button: {
    marginVertical: 8,
  },
});
