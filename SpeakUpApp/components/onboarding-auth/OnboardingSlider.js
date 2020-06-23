import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import styled from 'styled-components/native';

import OnboardingScrollIndicator from './OnboardingScrollIndicator.js';
import {set} from 'react-native-reanimated';

const OnboardingSlider = ({navigation}) => {
  let screenWidth = Dimensions.get('window').width;
  let count = 0;
  const [countState, setCountState] = useState(1);

  const scrollRef = useRef();

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
    padding-top: 7%;
    padding-bottom: 7%;
  `;
  const ScrollHeader = styled.Text`
    margin-top: 10%;
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 27px;

    padding-left: 30px;
    padding-right: 30px;

    color: #ffffff;
  `;
  const ScrollText = styled.Text`
    margin-top: 3%;
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    padding-left: 30px;
    padding-right: 30px;

    letter-spacing: 0.21px;

    color: #ffffff;

    opacity: 0.5;
  `;
  const OptionsView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 80px;

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
  const ScrollImg = styled.View`
    width: 100%;

    flex: 1;
    align-items: center;
    justify-content: center;

    /* border: 2px solid red; */
  `;
  const ScrollIndicatorView = styled.View`
    flex-direction: row;
    flex: 1;
    margin-left: 20%;
    margin-right: 20%;
  `;

  function scrollToNext() {
    if (countState === 3) {
      navigation.navigate('Login');
    } else {
      setCountState(countState + 1);
      scrollRef.current.scrollTo({x: screenWidth * countState});
    }
  }

  function scrollListener(e) {
    let pos = e.nativeEvent.contentOffset.x;
    if (pos === 0) {
    } else if (pos === screenWidth) {
    } else if (pos === screenWidth * 2) {
    }
  }

  return (
    <Main>
      <StatusBar barStyle="light-content" />
      <HorizScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        scrollEventThrottle={200}
        ref={scrollRef}
        onScroll={scrollListener}>
        <ScrollPanel key={1}>
          <ScrollImg>
            <Image source={require('../../assets/img/onboarding1.png')} />
          </ScrollImg>
          <ScrollHeader>Create a movement.</ScrollHeader>
          <ScrollText>
            Create groups, plan protests, and gain members to get your voice
            heard.
          </ScrollText>
        </ScrollPanel>

        <ScrollPanel key={2}>
          <ScrollImg>
            <Image source={require('../../assets/img/onboarding2.png')} />
          </ScrollImg>
          <ScrollHeader>Stay informed.</ScrollHeader>
          <ScrollText>
            Get updated with news developing in your area, make posts, ping
            police, safe and danger zones.
          </ScrollText>
        </ScrollPanel>

        <ScrollPanel key={3}>
          <ScrollImg style={{paddingLeft: 0, paddingRight: 0}}>
            <Image source={require('../../assets/img/onboarding3.png')} />
          </ScrollImg>
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
        <ScrollIndicatorView>
          <OnboardingScrollIndicator id={0} />
          <OnboardingScrollIndicator id={1} />
          <OnboardingScrollIndicator id={2} />
        </ScrollIndicatorView>
        <TouchableOpacity>
          <OptionsText
            style={{
              color: '#EA8239',
            }}
            onPress={() => scrollToNext()}>
            Next
          </OptionsText>
        </TouchableOpacity>
      </OptionsView>
    </Main>
  );
};

export default OnboardingSlider;
