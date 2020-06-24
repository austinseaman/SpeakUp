import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';


const SignUpEmergency = ({navigation}) => {
    const [ emergencyFullName, setEmergencyFullName ] = useState('FULL NAME');
    const [ emergencyPhoneNumber, setEmergencyPhoneNumber ] = useState('PHONE NUMBER');
    const [ emergencyEmail, setEmergencyEmail ] = useState('EMAIL');

    const onChangeEmergencyName = emergencyFullName => setEmergencyFullName(emergencyFullName)
    const onChangeEmergencyPhone = emergencyPhoneNumber => setEmergencyPhoneNumber(emergencyPhoneNumber)
    const onChangeEmergencyEmail = emergencyEmail => setEmergencyEmail(emergencyEmail)

//TOGGLE WAS FOR ORIGINAL DESIGN, PROBABLY NO LONGER NEEDED
    // const [ toggled, setToggled ] = useState(true)
    // const toggle = () => {
    //     setToggled(prev => {
    //         return !prev
    //     })
    // }

    const AlertWindow = () => {
        Alert.alert(
            'Contact added',
            'Press OK to add more',
            {
                text: "OK",
                onPress: () => navigation.navigate('SignUpEmergency')
            },
        )
    }

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
    const EmergencyInput = styled.TextInput`
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
        height: 56px;
        width: 100%;
        padding: 5px 15px;
        margin: 10px auto 0;
    `;
    const InputView = styled.View`
        justify-content: flex-start;
    `;
    const AddContactButton = styled.TouchableOpacity`
        opacity: 0.5;
        border: 1px dashed #FFFFFF;
        border-radius: 10px;
        height: 56px;
        width: 100%;
        margin: 50px auto 0;
    `;
    const AddContactText = styled.Text`
        color: #ffffff;
        text-transform: uppercase;
        font-family: Avenir;
        font-style: normal;
        font-weight: 800;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.94px;
        padding: 22px 25px;
        justify-content: center;
    `;
    const ButtonView = styled.View`
        justify-content: flex-end;
        width: 100%;
        flex: 1;
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
            justifyContent: 'flex-start',
            paddingLeft: 30,
            paddingRight: 30,
            paddingBottom: 65,
            }}>
                <Header>
                    <Text>Set an emergency contact(s)</Text>                    
                </Header>
                <InputView>
                    <EmergencyInput onChangeText={onChangeEmergencyName} value={emergencyFullName} />
                    <EmergencyInput onChangeText={onChangeEmergencyPhone} value={emergencyPhoneNumber} />
                    <EmergencyInput onChangeText={onChangeEmergencyEmail} value={emergencyEmail} />
                </InputView>
                {/* <View>
                    { toggled ?
                    <AddContactButton onPress={() => {
                        toggle()
                        }}>
                            <AddContactText  style={{color: 'red'}} >ADD ANOTHER CONTACT    
                               <Text style={{fontSize: 26, lineHeight: 30}} >           &oplus;</Text>
                            </AddContactText>
                    </AddContactButton>
                    :
                    <>
                    <EmergencyInputTopSpace onChangeText={onChangeEmergencyName} value={emergencyFullName} />
                    <EmergencyInput onChangeText={onChangeEmergencyPhone} value={emergencyPhoneNumber} />
                    <EmergencyInput onChangeText={onChangeEmergencyEmail} value={emergencyEmail} />
                    </>
                    }
                </View> */}
                <AddContactButton onPress={() => {
                        toggle()
                        }}>
                    <AddContactText onPress = {AlertWindow}>ADD ANOTHER CONTACT    
                        <Text style={{fontSize: 26, lineHeight: 30}} >           &oplus;</Text>
                    </AddContactText>
                </AddContactButton>
                <ButtonView>
                    <SignupButton  onPress={() => {
                            navigation.navigate('SignUpUsernamePassword');
                        }}>
                            <SignupText>Prev</SignupText>
                    </SignupButton>
                    <SignupButton  onPress={() => {
                        navigation.navigate('SignUpGroups');
                    }}>
                        <SignupText>Next</SignupText>
                    </SignupButton>
                </ButtonView>
            </LinearGradient>
        </Main>
    )
}
export default SignUpEmergency;