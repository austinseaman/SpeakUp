import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

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
  margin: 10px auto;
`;
const PhoneInputEntry = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.8);
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
  border-radius: 5px;
  padding-left: 24px;
  padding-right: 24px;
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
  margin: 15px auto 0;
  flex: 0.3;
  /* border: 2px solid red; */
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
  margin: 5px auto 0;
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
const OptionsView = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  margin-bottom: -30px;
  flex: 1;
`;
const ButtonTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: flex-end;
  justify-content: space-between;
  width: 50%;
`;
const OptionsText = styled.Text`
  font-family: Avenir;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.94px;
  text-transform: uppercase;
`;

const SignUpPhone = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [keyboardToggle, setKeyboardToggle] = useState(false);

  // function onChangePhoneNumber(val) {
  //   console.log(val);
  // }

  console.log(phoneNumber);

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
          <TextHeader style={{fontSize: 20, color: '#2cc3f8'}}>
            {'\n'}or NEXT to use email
          </TextHeader>
        </Header>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}
          keyboardVerticalOffset={60}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <PhoneInputEntry
              value={phoneNumber}
              placeholder="+1 MOBILE NUMBER"
              onChangeText={num => setPhoneNumber(num)}
              onFocus={() => setKeyboardToggle(prev => true)}
              keyboardType="number-pad"
              maxLength={10}
            />
          </TouchableWithoutFeedback>
          <TextDisclaimer>
            {'\n'}By entering and tapping Next, you agree to the &nbsp;
            <Text style={{textDecorationLine: 'underline'}}>Terms,</Text> &nbsp;
            <Text style={{textDecorationLine: 'underline'}}>
              E-Sign Consent
            </Text>
            &nbsp; & &nbsp;
            <Text style={{textDecorationLine: 'underline'}}>
              Privacy Policy
            </Text>
            .
          </TextDisclaimer>
          {/* <ButtonView>
            <SignupButton
              onPress={() => {
                navigation.navigate('SignUpEmail');
              }}>
              <SignupText>Next</SignupText>
            </SignupButton>
          </ButtonView> */}
          <OptionsView>
            <ButtonTouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <OptionsText
                style={{
                  color: '#ffffff',
                  opacity: 0.5,
                  marginLeft: -130,
                }}>
                Prev
              </OptionsText>
            </ButtonTouchableOpacity>
            <ButtonTouchableOpacity
              onPress={() => {
                navigation.navigate('SignUpEmail');
              }}>
              <OptionsText
                style={{
                  color: '#EA8239',
                  marginRight: -130,
                }}>
                Next
              </OptionsText>
            </ButtonTouchableOpacity>
          </OptionsView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </Main>
  );
};
export default SignUpPhone;
