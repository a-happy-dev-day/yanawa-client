import { Box, styled, Input, InputLabel, Typography, Button } from '@mui/material';
import React from 'react';

const NicknameInput = () => {
  return (
    <Box>
      <form>
        <StyledInputLabel htmlFor="nickname">닉네임을 입력해주세요.</StyledInputLabel>
        <StyledInput type="text" id="nickname" fullWidth disableUnderline={true} placeholder="닉네임 입력" />
        <Text>한글 또는 영문 2~8자, 특수분자 입력불가</Text>
        <StyledButton fullWidth>다음으로 (1/3)</StyledButton>
      </form>
    </Box>
  );
};

export default NicknameInput;

const StyledInputLabel = styled(InputLabel)`
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 6px;
  color: #707070;
`;

const StyledInput = styled(Input)`
  font-size: 24px;
  line-heigth: 1.5;
  font-weight: 700;
  color: #dbdbdb;
`;

const Text = styled(Typography)`
  font-size: 10px;
  line-height: 1.5;
  color: #666666;
  margin-bottom: 501px;
`;

const StyledButton = styled(Button)`
  font-size: 14px;
  line-height: 1.5;
  color: #fff;
  background-color: #858a8f;
  border-radius: 10px;
  padding: 15px 0;
  &:hover {
    background-color: #343a40;
  }
`;
