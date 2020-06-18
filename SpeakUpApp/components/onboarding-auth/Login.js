import React from 'react';
import {View, Text, TouchableOpacity, Animated, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const Login = ({navigation}) => {
  const Main = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #22222299;
    opacity: 1;
  `;
  const Header = styled.Text`
    width: 85%;

    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 40px;

    letter-spacing: 0.105751px;

    color: #ffffff;
  `;
  const SignupButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;

    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 15px;

    border: 2px solid #2cc3f8;
    border-radius: 5px;
  `;
  const SignupText = styled.Text`
    color: #2cc3f8;

    text-transform: uppercase;

    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.94px;
  `;
  const LoginButton = styled.TouchableOpacity`
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
        <Header>
          Your voice matters, <Text style={{fontWeight: '100'}}>Speak up.</Text>
        </Header>

        <LoginButton>
          <LoginText>Login</LoginText>
        </LoginButton>

        <SignupButton  onPress={() => {
            navigation.navigate('SignUpPhone');
          }}>
          <SignupText>Sign Up</SignupText>
        </SignupButton>
      </LinearGradient>
    </Main>
  );
};

export default Login;
