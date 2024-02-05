import React, {useLayoutEffect, useMemo, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../navigations/NavigationProps';
import BottomSheet from '@gorhom/bottom-sheet';
import * as Colors from '../constants/Colors';
import * as Typography from '../constants/Typography';
import Button from '../components/Button';
import Article from '../assets/svg/article.svg';
import Headers from '../components/Headers';

const RegulationScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationProps>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['85%'], []);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Headers />,
    });
  }, [navigation]);

  const onRejected = () => {
    navigation.goBack();
  };
  const onConfirmed = () => {
    navigation.navigate('SingInScreen');
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      handleIndicatorStyle={styles.bottomSheet}
      index={0}
      snapPoints={snapPoints}>
      <View style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Article fill={Colors.primary} />
            <Text style={styles.title}>เงือนไขการใช้บริการ</Text>
          </View>
          <View style={styles.content} />
          <View style={styles.footer}>
            <Button
              type="ghost"
              title="ปฏิเสธ"
              containerStyle={styles.button}
              onPress={onRejected}
            />
            <Button
              title="ยอมรับ"
              containerStyle={styles.button}
              onPress={onConfirmed}
            />
          </View>
        </View>
      </View>
    </BottomSheet>
  );
};

export default RegulationScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.white,
  },
  bottomSheet: {
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: Colors.white,
  },
  header: {
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'flex-end',
  },
  title: {
    ...Typography.textMedi18,
    color: Colors.black,
    marginLeft: 8,
  },
  content: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 145,
  },
});
