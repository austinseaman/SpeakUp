import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';


const SignUpGroups = ({navigation}) => {
    const [ search, setSearch ] = useState('');
    const onChangeSearchForGroup = search => setSearch(search)

    const Main = styled.View`
        flex: 1;
        align-items: center;
        justify-content: flex-end;
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
        margin: 30px auto 25px;
    `;
    const TextHeader = styled.Text`
        font-family: Avenir;
        font-weight: 800;
        font-size: 28px;
        line-height: 40px;
        color: #ffffff;
        letter-spacing: 0.105751px;
        margin-top: 10px;
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
        flex: 1;
        height: 56px;
        width: 100%;
        padding: 5px;
        margin: 40px 30px 50px 30px;
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
    const OptionsView = styled.View`
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        width: 100%;
        height: 60px;
        margin-bottom: -45px;
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
                <View>
                    <Text style={{color: 'red', fontSize: 26, marginTop: 80, marginBottom: 5}}>
                            Need Search for Group
                    </Text>
                </View>
                <Header>
                    <Input onChangeText={onChangeSearchForGroup} />
                    <TextHeader>Join a Group</TextHeader>
                </Header>
                <ScrollView>
                    <Text style={{color: 'red', fontSize: 26, marginTop: 20}}>
                    ***MAP GROUPS HERE***
                    </Text>
                </ScrollView>
                {/* <ButtonView>
                    <SignupButton  onPress={() => {
                                navigation.navigate('SignUpEmergency');
                            }}>
                                <SignupText>Prev</SignupText>
                        </SignupButton>
                    <SignupButton  
                    onPress={() => {navigation.navigate('****');}}  
                    >
                        <SignupText>Next</SignupText>
                    </SignupButton>
                </ButtonView> */}
                <OptionsView>
            <ButtonTouchableOpacity
              onPress={() => {
                navigation.navigate('SignUpEmergency');
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
              /* onPress={() => {
                  navigation.navigate('***');
                }}  */
                >
              <OptionsText
                style={{
                  color: '#EA8239', 
                  marginRight: -130,
                }}>
                Next
              </OptionsText>
            </ButtonTouchableOpacity>
          </OptionsView>
            </LinearGradient>
        </Main>
    )
}
export default SignUpGroups;