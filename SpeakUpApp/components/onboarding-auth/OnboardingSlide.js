import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const OnboardingSlide = ({header, text, img, id}) => {
  let screenWidth = Dimensions.get('window').width;

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
  const ScrollImg = styled.View`
    width: 100%;

    flex: 1;
    align-items: center;
    justify-content: center;

    /* border: 2px solid red; */
  `;

  return (
    <ScrollPanel id={id}>
      <ScrollImg>
        <Image source={img} />
      </ScrollImg>
      <ScrollHeader>{header}</ScrollHeader>
      <ScrollText>{text}</ScrollText>
    </ScrollPanel>
  );
};

export default OnboardingSlide;
