import React, { useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './components/onboarding-auth/Login.js';
import OnboardingSlider from './components/onboarding-auth/OnboardingSlider.js';
import SignUpPhone from './components/onboarding-auth/sign-up/SignUpPhone.js';
import SignUpEmail from './components/onboarding-auth/sign-up/SignUpEmail.js';
import SignUpUsernamePassword from './components/onboarding-auth/sign-up/SignUpUsernamePassword.js';
import SignUpEmergency from './components/onboarding-auth/sign-up/SignUpEmergency.js';
import SignUpGroups from './components/onboarding-auth/sign-up/SignUpGroups.js';
import PhoneLogin from './components/onboarding-auth/PhoneLogin.js';
import LoginLanding from './components/onboarding-auth/LoginLanding'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnboardingSlider"
          component={OnboardingSlider}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpPhone"
          component={SignUpPhone}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpEmail"
          component={SignUpEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpUsernamePassword"
          component={SignUpUsernamePassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpEmergency"
          component={SignUpEmergency}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpGroups"
          component={SignUpGroups}
          options={{headerShown: false}}
          />
        <Stack.Screen 
          name = "PhoneLogin"
          component = {(PhoneLogin)}
          options = {{headerShown: false}}
        />
        <Stack.Screen 
          name = "LoginLanding"
          component = {(LoginLanding)}
          options = {{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
