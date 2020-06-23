import React, {useEffect, useRef} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const OnboardingScrollIndicator = ({id, count}) => {
  const Container = styled.View`
    flex: 1;
    height: 25px;

    flex-direction: row;
    justify-content: space-around;
  `;
  const OuterBullet = styled.View`
    border: 0px solid #ea8239;
    opacity: ${count === id ? 1 : 0.5};

    height: 100%;
    width: 25px;

    border-radius: 50px;
    align-items: center;
    justify-content: center;
  `;
  const InnerBullet = styled.View`
    width: 8px;
    height: 8px;

    background-color: #ea8239;

    border-radius: 50px;
  `;

  return (
    <Container>
      <OuterBullet>
        <InnerBullet />
      </OuterBullet>
    </Container>
  );
};

export default OnboardingScrollIndicator;
