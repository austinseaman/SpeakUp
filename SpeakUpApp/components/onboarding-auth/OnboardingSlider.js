import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
  Animated,
} from 'react-native';
import styled from 'styled-components/native';
import OnboardingSlide from './OnboardingSlide.js';

const OnboardingSlider = ({navigation}) => {
  let screenWidth = Dimensions.get('window').width;
  let count = 0;

  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, screenWidth);

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
  const ScrollIndicatorContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex: 1;
    margin-left: 20%;
    margin-right: 20%;
  `;

  const data = [
    {
      header: 'Create a movement.',
      text:
        'Create groups, plan protests, and gain members to get your voice heard.',
      img: require('../../assets/img/onboarding1.png'),
      key: 1,
    },
    {
      header: 'Stay informed.',
      text:
        'Get updated with news developing in your area, make posts, ping po.ice, safe and danger zones.',
      img: require('../../assets/img/onboarding2.png'),
      key: 2,
    },
    {
      header: 'Be safe. Stay private.',
      text:
        'In-app location of members in your group at a protest, messaging and more privacy.',
      img: require('../../assets/img/onboarding3.png'),
      key: 3,
    },
  ];

  function scrollToNext() {
    if (count === 2) {
      navigation.navigate('Login');
    } else {
      count++;
      scrollRef.current.scrollTo({x: screenWidth * count});
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
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {x: scrollX}}},
        ])}
        ref={scrollRef}
        useNativeDriver={true}>
        {data.map(item => {
          return <OnboardingSlide {...item} />;
        })}
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
        <ScrollIndicatorContainer>
          {data.map((item, index) => {
            let opacity = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.5, 1, 0.5],
              extrapolate: 'clamp',
            });
            let borderWidth = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0, 3, 0],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={index}
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  width: 20,
                  height: 20,
                  borderWidth,
                  borderRadius: 20,
                  opacity,
                  borderColor: '#EA8239',
                }}>
                <Animated.View
                  key={index}
                  style={{
                    alignSelf: 'center',

                    opacity,
                    width: 6,
                    height: 6,
                    borderRadius: 10,
                    backgroundColor: '#EA8239',
                  }}
                />
              </Animated.View>
            );
          })}
        </ScrollIndicatorContainer>
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
