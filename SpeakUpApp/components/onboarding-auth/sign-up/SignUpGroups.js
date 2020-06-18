import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';


const SignUpGroups = ({navigation}) => {
    let screenWidth = Dimensions.get('window').width;
    // const [ emergencyFullName, setEmergencyFullName ] = useState('FULL NAME');

    // const onChangeEmergencyName = emergencyFullName => setEmergencyFullName(emergencyFullName)

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
    flex: 2;
    margin-top: 116px;

    `;
    const Input = styled.TextInput`
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
    flex: 3;
    height: 56px;
    width: 100%;
    padding: 5px;
    margin: 40px 30px 50px 30px;
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
                <View>
                <Text style={{color: 'red', fontSize: 26, marginBottom: 100}}>
                        Need Search for Group
                    </Text>
                </View>

                <Header>
                    <Text style={{flex: 1}}>Join a Group</Text>
                    <Input onChangeText={onChangeEmergencyName} />
                </Header>
                <View>
                    <Text style={{color: 'red', fontSize: 26, marginBottom: 100}}>
                        groups shown here
                    </Text>
                </View>
                <SignupButton  onPress={() => {
                    navigation.navigate('****');
                }}>
                    <SignupText>Next</SignupText>
                </SignupButton>
            </LinearGradient>
        </Main>
    )
}
export default SignUpGroups;