import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './components/onboarding-auth/Login.js';
import OnboardingSlider from './components/onboarding-auth/OnboardingSlider.js';
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
