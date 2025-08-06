// src/types/navigation.ts

import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

// 1. Stack params
export type RootStackParamList = {
  Login: undefined;
  Tabs: undefined;
  Settings: undefined;
};

// 2. Bottom tab params
export type BottomTabParamList = {
  Login: undefined;
  Details: undefined;
  Home: undefined;
};

// 3. Stack navigator
export const Stack = createNativeStackNavigator<RootStackParamList>();

// 4. Bottom tab navigator
export const Tab = createBottomTabNavigator<BottomTabParamList>();


// 5. Stack Screens props helpers
export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Login"
>;
export type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Settings"
>;


// 5. Tab Screens props helpers
export type HomeScreenProps = BottomTabScreenProps<BottomTabParamList, 'Home'>;
export type DetailsScreenProps = BottomTabScreenProps<BottomTabParamList, "Details">;
