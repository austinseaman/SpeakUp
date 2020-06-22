import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from '@nandorojo/react-native-phone-input';
// import ModalPickerImage from './ModalPickerImage';

const SignUpPhone = ({navigation}) => {
    let screenWidth = Dimensions.get('window').width;
    const [ phoneNumber, setPhoneNumber ] = useState('+1 MOBILE NUMBER');
    const onChangePhone = phone => setPhone(phone)

    // const phoneRef = useRef(undefined);
    // const [ pickerData, setPickerData ] = useState('');
    const [phoneValue, setPhoneValue] = useState(null)
    const [isValidNumber, setIsValidNumber] = useState(false)
    const phoneRef = useRef(undefined);
    onPressFlag = () => {
        myCountryPicker.open();
    };
    selectCountry = (country) => {
    phone.selectCountry(country.iso2);
    };

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
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 40px;
    letter-spacing: 0.105751px;
    color: #ffffff;
    flex: 1;
    margin-top: 116px;
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
    const InputView = styled.View`
    flex: 1;
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
    flex: 1;
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
    const PhoneInputView = styled.View`
    background-color: #dedede;
    padding: 15px 10px;
    border-radius: 5px;
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
            justifyContent: 'flex-end',
            paddingLeft: 30,
            paddingRight: 30,
            paddingBottom: 65,
            }}>
                <Header>
                    <TextHeader>Enter your phone number</TextHeader>
                    <TextHeader  style={{ fontSize: 20, color: '#2cc3f8'}}>{"\n"}or NEXT to use email</TextHeader>
                </Header>
                {/* <InputView >
                    <PhoneInputEntry  value={phoneNumber} onChangeText={onChangePhone} />
                </InputView> */}
                <TextHeader  style={{ fontSize: 20, color: 'red'}}>{"\n"}need to figure out how to get phone keyboard to pop up...update components? See warnings.</TextHeader>
                <PhoneInputView>                     
                        <PhoneInput
                            ref={phoneRef}
                            /* onChangePhoneNumber={value => {
                            setPhoneValue(value);
                            setIsValidNumber(phoneRef.current.isValidNumber())
                            }}  */
                        />
                        <ValidNumber>ENTER HERE: Is Valid Number: {isValidNumber ? 'Yes' : 'No'}</ValidNumber>
                </PhoneInputView>
                {/* <View> */}
                    <TextDisclaimer >{"\n"}By entering and tapping Next, you agree to the Terms, E-Sign Consent & Privacy Policy</TextDisclaimer>
                {/* </View> */}
                <SignupButton onPress={() => {
                    navigation.navigate('SignUpEmail');
                }}>
                    <SignupText>Next</SignupText>
                </SignupButton>
            </LinearGradient>
        </Main>
    )
}
export default SignUpPhone;