import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import Stacks from '../navigations/Stacks';

const onReady = () => {
  BootSplash.hide({fade: true});
};

const MainApp = (): JSX.Element => {
  return (
    <NavigationContainer onReady={onReady}>
      <Stacks />
    </NavigationContainer>
  );
};

export default MainApp;
