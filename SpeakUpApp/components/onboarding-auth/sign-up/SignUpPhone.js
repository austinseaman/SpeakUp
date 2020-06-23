import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from '@nandorojo/react-native-phone-input';
// import ModalPickerImage from './ModalPickerImage';

const SignUpPhone = ({navigation}) => {
    const [ phoneNumber, setPhoneNumber ] = useState('+1 MOBILE NUMBER');
    const onChangePhone = phone => setPhone(phone);

    const [phoneValue, setPhoneValue] = useState(null);
    // const [isValidNumber, setIsValidNumber] = useState(false)
    // const phoneRef = useRef(undefined);

    const Main = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    background-color: #242633;
    opacity: 1;
    `;
    const Header = styled.Text`
    width: 100%;
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 40px;
    letter-spacing: 0.105751px;
    color: #ffffff;
    margin: 116px auto 25px;
    `;
    const TextHeader = styled.Text`
    font-family: Avenir;
    font-weight: 800;
    font-size: 28px;
    line-height: 30px;
    color: #ffffff;
    letter-spacing: 0.105751px;
    margin-top: 10px;
    `;
    const PhoneInputEntry = styled.TextInput`
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
    margin: 1px auto;
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
    margin: 10px auto;
    flex: 1;
    `;
// DELETE PHONE INPUT VIEW STYLING IF REMOVING PACKAGE
    const PhoneInputView = styled.View`
    background-color: #dedede;
    padding: 15px 10px;
    border-radius: 5px;
    `;
    const ButtonView = styled.View`
    justify-content: flex-end;
    width: 100%;
    flex: 1;
    `;
    const SignupButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: flex-end;
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
// DELETE VALID NUMBER STYLING IF REMOVING PACKAGE
    const ValidNumber = styled.Text`
    color: #666;
    text-transform: uppercase;
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.94px;
    padding-top: 2px;
    `;
    
    return (
        <Main>
            <LinearGradient
            colors={['#24263399', '#24263399', '#242633', '#242633', '#242633']}
            style={{
            width: '100%',
            flex: 1,
            justifyContent: 'flex-start',
            paddingLeft: 30,
            paddingRight: 30,
            paddingBottom: 65,
            }}>
                <Header>
                    <TextHeader>Enter your phone number</TextHeader>
                    <TextHeader  style={{ fontSize: 20, color: '#2cc3f8'}}>{"\n"}or NEXT to use email</TextHeader>
                </Header>
                {/* INPUT BELOW WILL NEED TO TIE TO PHONE BLOCK CAMERON IS BUILDING */}
                <PhoneInputEntry  value={phoneNumber} onChangeText={onChangePhone} />
                {/* <PhoneInputView>                     
                        <PhoneInput
                            ref={phoneRef}
                            onChangePhoneNumber={value => {
                            setPhoneValue(value);
                            setIsValidNumber(phoneRef.current.isValidNumber())
                            }}  
                        />
                        <ValidNumber>ENTER HERE: Is Valid Number: {isValidNumber ? 'Yes' : 'No'}</ValidNumber>
                </PhoneInputView> */}
                    <TextDisclaimer >{"\n"}By entering and tapping Next, you agree to the &nbsp;
                        <Text style={{textDecorationLine: 'underline'}}>Terms,</Text> &nbsp;
                        <Text style={{textDecorationLine: 'underline'}}>E-Sign Consent</Text>&nbsp;
                        & &nbsp;
                        <Text style={{textDecorationLine: 'underline'}}>Privacy Policy</Text>.
                    </TextDisclaimer>
                    <TextHeader  style={{ fontSize: 20, color: 'red', marginBottom: 0}}>{"\n"}THE R-N PHONT INPUT PACKAGE IS NOT WORKING. CAMERON GOING TO MAKE A PHONE INPUT BLOCK W/ STATE</TextHeader>
                    <ButtonView>
                        <SignupButton onPress={() => {
                            navigation.navigate('SignUpEmail');
                        }}>
                            <SignupText>Next</SignupText>
                        </SignupButton>
                </ButtonView>
            </LinearGradient>
        </Main>
    )
}
export default SignUpPhone;
