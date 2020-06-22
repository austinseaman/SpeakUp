import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';


const SignUpEmail = ({navigation}) => {
    const [ email, setEmail ] = useState('EMAIL');
    const onChangeEmail = email => setEmail(email)


    const Main = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    background-color: #242633;
    opacity: 1;
    `;
    const Header = styled.Text`
    width: 85%;
    font-family: Avenir;
    font-weight: 800;
    font-size: 28px;
    line-height: 40px;
    letter-spacing: 0.105751px;
    color: #ffffff;
    margin-top: 116px;
    margin-bottom: 0px;
    `;
    const TextHeader = styled.Text`
    font-family: Avenir;
    font-weight: 800;
    font-size: 28px;
    line-height: 40px;
    color: #ffffff;
    letter-spacing: 0.105751px;
    margin-top: 25px;
    flex: 1;
    `;
    const EmailInput = styled.TextInput`
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    text-transform: uppercase;
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.94px;
    color: #707070;
    width: 100%;
    height: 56px;
    padding: 5px;
    margin: 10px auto;
    `;
    const TextDisclaimer = styled.Text`
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.21px;
    color: #ffffff;
    width: 100%;
    height: 40px;  
    opacity: 0.5;
    flex: 1;
    margin: 15px auto 0;
    `;
    const SignupButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 15px auto 0;
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

    return (
        <Main>
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
                    <TextHeader>Enter your email</TextHeader>
                </Header>
                    <EmailInput onChangeText={onChangeEmail} value={email}/>
                    <TextDisclaimer>{"\n"}By entering and tapping Next, you agree to the Terms, E-Sign Consent & Privacy Policy</TextDisclaimer>
                <SignupButton  onPress={() => {
                        navigation.navigate('SignUpPhone');
                    }}>
                        <SignupText>Prev</SignupText>
                </SignupButton>
                <SignupButton  onPress={() => {
                        navigation.navigate('SignUpUsernamePassword');
                    }}>
                        <SignupText>Next</SignupText>
                </SignupButton>    
            </LinearGradient>
        </Main>
    )
}
export default SignUpEmail;