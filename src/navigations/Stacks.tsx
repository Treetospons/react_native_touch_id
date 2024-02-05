import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackProps} from './NavigationProps';

import HomeScreen from '../screens/HomeScreen';
import RegulationScreen from '../screens/RegulationScreen';
import SingInScreen from '../screens/SingInScreen';
import SendOTPScreen from '../screens/SendOTPScreen';
import ConfirmeOTPScreen from '../screens/ConfirmeOTPScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import SuccessScreen from '../screens/SuccessScreen';
import PinCodeScreen from '../screens/PinCodeScreen';
import ConfirmePinCodeScreen from '../screens/ConfirmePinCodeScreen';
import SettingAuthScreen from '../screens/SettingAuthScreen';
import AuthScreen from '../screens/AuthScreen';

const Stack = createStackNavigator<StackProps>();

const Stacks = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Group>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RegulationScreen" component={RegulationScreen} />
        <Stack.Screen name="SingInScreen" component={SingInScreen} />
        <Stack.Screen name="SendOTPScreen" component={SendOTPScreen} />
        <Stack.Screen name="ConfirmeOTPScreen" component={ConfirmeOTPScreen} />
        <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
        />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="PinCodeScreen" component={PinCodeScreen} />
        <Stack.Screen
          name="ConfirmePinCodeScreen"
          component={ConfirmePinCodeScreen}
        />
        <Stack.Screen name="SettingAuthScreen" component={SettingAuthScreen} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Stacks;
