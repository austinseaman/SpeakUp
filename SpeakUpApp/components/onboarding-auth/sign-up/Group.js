import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const Container = styled.View`
  min-height: 170px;
  border-radius: 10px;
  padding: 18px 18px;
  background-color: #1d1e27;
  margin-bottom: 16px;
`;
const ProfileContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
const Profile = styled.View`
  padding-right: 15px;
`;
const ProfileImage = styled.Image`
  max-width: 50px;
  max-height: 50px;
  border-radius: 100px;
`;
const TitleDesc = styled.View`
  flex: 3;
`;
const Title = styled.Text`
  color: #fff;
  font-family: Avenir;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 8px;
`;
const Desc = styled.Text`
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
`;
const StatsFollowContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
const Stats = styled.View`
  align-items: center;
  justify-content: flex-end;

  padding-left: 5px;
  padding-right: 5px;
  flex: 1;
`;
const Amount = styled.Text`
  font-family: Avenir;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 22px;

  text-align: center;
  letter-spacing: 0.21px;

  color: #2cc3f8;
`;
const Type = styled.Text`
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  text-align: center;
  letter-spacing: 0.21px;

  color: #fff;
`;
const FollowButtonContainer = styled.View`
  padding-right: 15px;
  align-items: flex-end;
  justify-content: center;
  flex: 3;
`;
const FollowButton = styled.TouchableOpacity`
  width: 125px;
  height: 34px;
  border-radius: 8px;
  color: #fff;
  border: 2px solid red;
  justify-content: center;
  align-items: center;
`;

const Group = ({title, desc, profile, marches, fist}) => {
  return (
    <Container>
      <ProfileContainer>
        <Profile>
          <ProfileImage
            source={
              profile ||
              require('../../../assets/img/profile/defaultProfile.png')
            }
          />
        </Profile>
        <TitleDesc>
          <Title>{title || 'Title'}</Title>
          <Desc>{desc || 'Description'}</Desc>
        </TitleDesc>
      </ProfileContainer>
      <StatsFollowContainer>
        <Stats>
          <Amount>{marches || 0}</Amount>
          <Type>marches</Type>
        </Stats>
        <Stats>
          <Amount>{fist || 0}</Amount>
          <Type>fist</Type>
        </Stats>
        <FollowButtonContainer>
          <FollowButton>
            <LinearGradient
              style={{
                width: 125,
                height: 34,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
              }}
              colors={['#44D7B6', '#0091FF']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text
                style={{
                  fontFamily: 'Avenir',
                  color: '#fff',
                  fontWeight: '700',
                  letterSpacing: 0.805714,
                }}>
                FOLLOW
              </Text>
            </LinearGradient>
          </FollowButton>
        </FollowButtonContainer>
      </StatsFollowContainer>
    </Container>
  );
};

export default Group;
