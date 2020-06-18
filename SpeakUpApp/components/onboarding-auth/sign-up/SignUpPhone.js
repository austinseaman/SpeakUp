import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput, { ModalPickerImage } from 'react-native-phone-input';
// import ModalPickerImage from './ModalPickerImage';

const SignUpPhone = ({navigation}) => {
    let screenWidth = Dimensions.get('window').width;
    const [ phoneNumber, setPhoneNumber ] = useState('+1 MOBILE NUMBER');
    const onChangePhone = phone => setPhone(phone)

    const [ pickerData, setPickerData ] = useState('');

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
    const HeaderView = styled.View`
    width: 85%;
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 40px;
    letter-spacing: 0.105751px;
    margin-top: 116px;
    margin-bottom: 25px;
    border: 2px red;
    `;
    const TextHeader = styled.Text`
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 40px;
    letter-spacing: 0.105751px;
    margin-top: 116px;
    margin-bottom: 25px;
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
    width: 315px;
    height: 56px;
    padding: 5px;
    `;
    const TextDisclaimer = styled.Text`
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.21px;
    color: #ffffff;
    width: 315px;
    height: 40px;
    left: 32px;
    top: 321px;    
    opacity: 0.5;
    margin-top: 100px;
    flex: 4;
    `;
    const PhoneInputView = styled.View`
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
                <HeaderView>
                    <TextHeader style={{ color: '#fff'}}>Enter your phone number</TextHeader>
                    <TextHeader  style={{ fontSize: 20, marginBottom: 15, color: '#2cc3f8'}}>{"\n"}or NEXT to use email</TextHeader>
                </HeaderView>
                <InputView >
                    <PhoneInputEntry  value={phoneNumber} onChangeText={onChangePhone} />
                </InputView>
                <View>
                    <TextDisclaimer >{"\n"}By entering and tapping Next, you agree to the Terms, E-Sign Consent & Privacy Policy</TextDisclaimer>
                </View>
                <PhoneInputView>
                    <PhoneInput ref={phoneRef} 
                        onPressFlag={onPressFlag} />
                    <ModalPickerImage
                        ref={(ref) => {
                            myCountryPicker = ref;
                        }}
                        data={pickerData}
                        onChange={(country) => {
                            selectCountry(country);
                        }}
                        cancelText="Cancel"
                        />
                </PhoneInputView>
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