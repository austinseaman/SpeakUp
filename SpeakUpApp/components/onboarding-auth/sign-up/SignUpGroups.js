import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Group from './Group.js';

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
const InputView = styled.View`
  background-color: #1d1e27;
  border-radius: 10px;
  text-transform: uppercase;
  justify-content: space-between;
  line-height: 19px;
  letter-spacing: 0.94px;
  color: #fff;
  flex-direction: row;
  height: 56px;
  width: 100%;
  padding: 17px 17px 17px 17px;

  margin-top: 79px;
`;
const Input = styled.TextInput`
  font-family: Avenir;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #fff;
`;
const GroupScrollView = styled.ScrollView`
  flex: 15;
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

const SignUpGroups = ({navigation}) => {
  const [search, setSearch] = useState('');
  const onChangeSearchForGroup = search => setSearch(search);

  const dummyData = [
    {
      title: '#BlackLivesMatter',
      desc:
        'A short bio explaining what the group stands for. Keep it short, 1-2 sentences.',
      profile: null,
      marches: 7,
      fist: 400,
    },
    {
      title: 'PETA',
      desc:
        'A short bio explaining what the group stands for. Keep it short, 1-2 sentences.',
      profile: null,
      marches: 7,
      fist: 400,
    },
    {
      title: 'NAACP',
      desc:
        'A short bio explaining what the group stands for. Keep it short, 1-2 sentences.',
      profile: null,
      marches: 7,
      fist: 400,
    },
  ];

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
        <InputView>
          <Input
            onChangeText={onChangeSearchForGroup}
            value={search}
            placeholder="Search for a group"
            placeholderTextColor="#ffffff50"
          />
          <TouchableOpacity>
            <Image
              source={require('../../../assets/img/filterIcon/filter.png')}
            />
          </TouchableOpacity>
        </InputView>
        <Header>
          <TextHeader>Join a Group</TextHeader>
        </Header>
        <GroupScrollView>
          {dummyData.map(group => (
            <Group {...group} />
          ))}
        </GroupScrollView>
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
  );
};
export default SignUpGroups;
