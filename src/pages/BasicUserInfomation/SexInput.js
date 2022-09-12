import {Box, styled, InputLabel, ToggleButtonGroup, ToggleButton, Typography, Button} from '@mui/material';
import React, {useState} from 'react';

const SexInput = ({userInfoData, setUserInfoData,setUserInfoPage}) => {

    const onChangeHandler = (event, value) => {
        setUserInfoData({
            ...userInfoData,
            sex: value
        })
    }

    const onClickHandler = () => {
        setUserInfoPage(3)
    }

    return (
        <Box>
            <form>
                <StyledInputLabel htmlFor="sex">성별을 선택해주세요.</StyledInputLabel>
                <StyledToggleButtonGroup exclusive onChange={onChangeHandler} value={userInfoData.sex}>
                    <StyledToggleButton name="sex" value="male">
                        남자
                    </StyledToggleButton>
                    <StyledToggleButton name="sex" value="female">
                        여자
                    </StyledToggleButton>
                </StyledToggleButtonGroup>
            </form>
            <Text></Text>
            <StyledButton onClick={onClickHandler} fullWidth>다음으로 (2/4)</StyledButton>
        </Box>
    );
};

export default SexInput;

const StyledInputLabel = styled(InputLabel)`
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 6px;
  color: #707070;
`;

const StyledToggleButton = styled(ToggleButton)`
  font-size: 24px;
  line-height: 1.5;
  font-weight: 700;
  color: #dbdbdb;
`;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({theme}) => ({
    '& .MuiToggleButtonGroup-grouped': {
        border: 'none',
        '&:not(:first-of-type)': {},
        '&:first-of-type': {},
        '&.Mui-selected': {
            backgroundColor: '#fff',
            color: '#707070',
        },
    },
}));

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
