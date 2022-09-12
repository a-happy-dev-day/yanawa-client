import React from 'react';
import {Box, Button, InputLabel, styled, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const YearInput = ({userInfoData, setUserInfoData}) => {
    const navigate = useNavigate();
    const onChangeHandler = (event) => {
        setUserInfoData({
            ...userInfoData,
            year: Number(event.target.value)
            }
        )
    }

    const onClickHandler = () => {
        navigate('/main')
    }

    return (
        <Box>
            <form>
                <StyledInputLabel htmlFor="playYear">테니스를 얼마동안 하셨나요?</StyledInputLabel>
                <StyledInput onChange={onChangeHandler} type="number" min="0" max="100"   id="playYear" placeholder="N년차" />
                <Text></Text>
                <StyledButton onClick={onClickHandler} fullWidth>입력완료</StyledButton>
            </form>
        </Box>
    );
};

export default YearInput;

const StyledInputLabel = styled(InputLabel)`
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 6px;
  color: #707070;
`;

const StyledInput = styled("input")`
  font-size: 24px;
  line-height: 1.5;
  font-weight: 700;
  color: #707070;
  width: 100%;
  border: 0;
  outline: 0;
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
