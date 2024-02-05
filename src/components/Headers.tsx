import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Colors from '../constants/Colors';
import ArrowBack from '../assets/svg/arrow_back.svg';

const Headers = (): JSX.Element => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={[styles.goBack, Platform.OS === 'ios' && {marginTop: 35}]}>
        <TouchableOpacity onPress={goBack}>
          <ArrowBack />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: Colors.white,
  },
  goBack: {
    width: 32,
    height: 32,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
