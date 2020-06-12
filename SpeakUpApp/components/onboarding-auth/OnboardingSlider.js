import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import styled from 'styled-components/native';

const OnboardingSlider = ({navigation}) => {
  let screenWidth = Dimensions.get('window').width;

  const Main = styled.View`
    flex: 1;

    align-items: center;
    justify-content: flex-end;

    width: 100%;

    background-color: #242633;
    opacity: 1;
  `;
  const HorizScrollView = styled.ScrollView`
    width: 100%;
    height: 100%;
  `;
  const ScrollPanel = styled.View`
    flex: 1;
    align-items: flex-start;
    justify-content: flex-end;

    width: ${screenWidth}px;
    padding-bottom: 100px;
    padding-left: 30px;
    padding-right: 30px;
  `;
  const ScrollHeader = styled.Text`
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 27px;

    color: #ffffff;
  `;
  const ScrollText = styled.Text`
    margin-top: 8px;
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */

    letter-spacing: 0.21px;

    color: #ffffff;

    opacity: 0.5;
  `;
  const OptionsView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 60px;

    padding-left: 30px;
    padding-right: 30px;
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
      <StatusBar barStyle="light-content" />
      <HorizScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}>
        <ScrollPanel>
          <ScrollHeader>Create a movement.</ScrollHeader>
          <ScrollText>
            Create groups, plan protests, and gain members to get your voice
            heard.
          </ScrollText>
        </ScrollPanel>

        <ScrollPanel>
          <ScrollHeader>Stay informed.</ScrollHeader>
          <ScrollText>
            Get updated with news developing in your area, make posts, ping
            police, safe and danger zones.
          </ScrollText>
        </ScrollPanel>

        <ScrollPanel>
          <ScrollHeader>Be safe. Stay private.</ScrollHeader>
          <ScrollText>
            In-app location of members in your group at a protest, messaging and
            more privacy.
          </ScrollText>
        </ScrollPanel>
      </HorizScrollView>

      <OptionsView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <OptionsText
            style={{
              color: '#ffffff',
              opacity: 0.5,
            }}>
            Skip
          </OptionsText>
        </TouchableOpacity>

        <TouchableOpacity>
          <OptionsText
            style={{
              color: '#EA8239',
            }}>
            Next
          </OptionsText>
        </TouchableOpacity>
      </OptionsView>
    </Main>
  );
};

export default OnboardingSlider;
