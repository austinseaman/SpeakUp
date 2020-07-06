import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Main = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #22222299;
  opacity: 1;
`;
const Header = styled.Text`
  flex: 1;
  font-family: Avenir;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 40px;
  margin-top: 35%;
  letter-spacing: 0.105751px;
  color: #ffffff;
  margin-left: auto;
  margin-right: auto;
`;
const NextButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 70px;
  border-radius: 5px;
  background-color: #ffffff;
`;
const LoginText = styled.Text`
  color: #1d1e27;
  text-transform: uppercase;
  font-family: Avenir;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.94px;
`;
const SignupText = styled.Text`
  color: #ffffff;
  text-transform: uppercase;
  font-family: Avenir;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: 0.94px;
  margin-top: 20px;
`;

const PhoneLogin = ({navigation}) => {
  const [loginText, setLoginText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  return (
    <Main>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#24263399', '#24263399', '#242633', '#242633', '#242633']}
        style={{
          width: '100%',
          flex: 1,
          justifyContent: 'flex-end',
          paddingLeft: 30,
          paddingRight: 30,
          paddingBottom: 65,
        }}>
        <Header>Enter your username and password</Header>
        <TextInput
          style={{
            height: 56,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 5,
            marginBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Avenir',
            fontSize: 14,
            fontWeight: '800',
            padding: 15,
          }}
          onChangeText={loginText => setLoginText(loginText)}
          value={loginText}
          placeholder="USERNAME"
        />
        <TextInput
          style={{
            height: 56,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
            fontFamily: 'Avenir',
            fontSize: 14,
            fontWeight: '800',
            marginBottom: 245,
          }}
          onChangeText={passwordText => setPasswordText(passwordText)}
          value={passwordText}
          placeholder="PASSWORD"
          secureTextEntry={true}
        />
        <NextButton
          onPress={() => {
            navigation.navigate('LoginLanding');
          }}>
          <LoginText>Login</LoginText>
        </NextButton>
        <SignupText>
          <SignupText style={{flexDirection: 'row'}}>
            Don't have an account yet?{' '}
          </SignupText>
          <Text
            style={{flexDirection: 'row', color: 'lightblue'}}
            onPress={() => {
              navigation.navigate('SignUpPhone');
            }}>
            Sign Up
          </Text>
        </SignupText>
      </LinearGradient>
    </Main>
  );
};

export default PhoneLogin;
