import type {RouteProp} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

type PinCodeParms = {
  pinCode: string[];
};

export type StackProps = {
  HomeScreen: undefined;
  RegulationScreen: {lang: string} | undefined;
  SingInScreen: undefined;
  SendOTPScreen: undefined;
  ConfirmeOTPScreen: undefined;
  ForgetPasswordScreen: undefined;
  SuccessScreen: undefined;
  PinCodeScreen: PinCodeParms | undefined;
  ConfirmePinCodeScreen: PinCodeParms | undefined;
  SettingAuthScreen: PinCodeParms | undefined;
  AuthScreen: PinCodeParms | undefined;
};

export type RouteConfirmePinCodeProps = RouteProp<
  StackProps,
  'ConfirmePinCodeScreen'
>;
export type RouteSettingAuthProps = RouteProp<StackProps, 'SettingAuthScreen'>;
export type RouteAuthProps = RouteProp<StackProps, 'AuthScreen'>;

export type NavigationProps = NativeStackNavigationProp<StackProps>;
