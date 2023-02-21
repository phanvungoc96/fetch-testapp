/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image } from 'react-native';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import Wallet from '../screens/Wallet';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Platform } from 'react-native';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: 'absolute', backgroundColor: 'white' },
        tabBarShowLabel: false,
        tabBarItemStyle: { paddingTop: 12 },
        headerBackgroundContainerStyle: { backgroundColor: '#171725' },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                resizeMode="contain"
                style={{
                  tintColor: focused ? '#FC5A5A' : '#D5D5DC',
                  width: 40,
                  height: 40,
                }}
                source={require('../assets/images/home.png')}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                resizeMode="contain"
                style={{
                  tintColor: focused ? '#FC5A5A' : '#D5D5DC',
                  width: 40,
                  height: 40,
                }}
                source={require('../assets/images/notify.png')}
              />
            );
          },
          tabBarBadge: '',
          tabBarBadgeStyle: {
            top: Platform.OS === 'ios' ? 0 : 9,
            backgroundColor: '#FC5A5A',
            minWidth: 14,
            maxHeight: 14,
            borderRadius: 7,
            fontSize: 10,
            lineHeight: 13,
            alignSelf: undefined,
          },
        }}
      />
      <BottomTab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                resizeMode="contain"
                style={{
                  tintColor: focused ? '#FC5A5A' : '#D5D5DC',
                  width: 40,
                  height: 40,
                }}
                source={require('../assets/images/wallet.png')}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                resizeMode="contain"
                style={{
                  tintColor: focused ? '#FC5A5A' : '#D5D5DC',
                  width: 40,
                  height: 40,
                }}
                source={require('../assets/images/user.png')}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */