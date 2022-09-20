import React from 'react';
import { Box, styled, Button } from '@mui/material';

import logo_blue from '../../assets/images/splash/logo_blue.png';
import kakao_icon from '../../assets/images/login/kakao_icon.png';

const Login = () => {
  return (
    <Container>
      <h1>
        <img src={logo_blue} alt="다나와" />
      </h1>
      <TextContainer>
        <p>
          정확한 레벨 정보로
          <br />
          다양한 사람을 만나 경기하고
          <br />
          점점 내 레벨을 업 해보세요!
        </p>
      </TextContainer>
      <StyledButton>
        <img src={kakao_icon} alt="카카오" />
        <span>카카오로 시작하기</span>
      </StyledButton>
      <div style={{ textAlign: 'center' }}>
        <StyledLink>이미 회원이에요</StyledLink>
      </div>
    </Container>
  );
};

export default Login;

const Container = styled(Box)`
  padding: 343px 20px 0;
  h1 {
    text-align: center;
    margin: 0;
    height: 40px;
  }
`;

const TextContainer = styled(Box)`
  text-align: center;
  p {
    margin: 20px 0 197px;
  }
`;

const StyledButton = styled(Button)`
  background-color: #fee500;
  color: #000;
  border-radius: 10px;
  width: 100%;
  font-size: 14px;
  line-height: 1.2;
  height: 50px;
  position: relative;
  img {
    margin-right: 5px;
  }
  &:hover {
    background-color: #fee500;
  }
`;

const StyledLink = styled(Button)`
  color: #000;
  font-size: 15px;
  line-height: 1.5;
  margin-top: 20px;
  padding: 0;
`;
