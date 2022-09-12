import {Box, styled, Input, InputLabel, Typography, Button} from '@mui/material';
import React from 'react';

const NicknameInput = ({userInfoData, setUserInfoData,setUserInfoPage}) => {

    const onChangeHandler = (event) => {
        setUserInfoData({...userInfoData, nickname: event.target.value})
    }

    const onClickHandler = () => {
        setUserInfoPage(2)
    }
    return (
        <Box>
            <form>
                <StyledInputLabel htmlFor="nickname">닉네임을 입력해주세요.</StyledInputLabel>
                <StyledInput onChange={onChangeHandler} name='nickname' type="text" id="nickname" fullWidth
                             disableUnderline={true} placeholder="닉네임 입력"/>
                <Text></Text>
                <StyledButton onClick={onClickHandler} fullWidth>다음으로 (1/4)</StyledButton>
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
  line-height: 1.5;
  font-weight: 700;
  color: #707070;
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
