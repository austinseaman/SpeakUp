import React, {useState} from 'react';
import {View, Text,TextInput, StyleSheet, StatusBar} from 'react-native'
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const PhoneLogin = ({navigation}) => {
const [text, setText] = useState('')

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
const UserInput = styled.TextInput`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    width:315;
    height:56;
    placeholder:'username';
    background: rgba(255, 255, 255, 0.8);
`
const PasswordInput = styled.TextInput`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    width:315;
    height:56;
    placeholder:'password';
    secure-text-entry:{true}
    background: rgba(255, 255, 255, 0.8);
`
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

    return(
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
                <UserInput />
                <PasswordInput />
                <LoginButton>
                    <LoginText>Login</LoginText>
                </LoginButton>
            </LinearGradient>
        </Main>
    )
};

          
           
export default PhoneLogin;
            
            








