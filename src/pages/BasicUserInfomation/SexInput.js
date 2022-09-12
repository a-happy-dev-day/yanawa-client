import { Box, styled, InputLabel,ToggleButtonGroup, ToggleButton } from '@mui/material';
import React, {useState} from 'react';

const SexInput = () => {
  const [sex, setSex] = useState('male');

  const onChangeHandler = (event, value) => {
    setSex(value)
  }

  console.log(sex);
  return (
    <Box>
      <form>
        <StyledInputLabel htmlFor="sex">성별을 선택해주세요.</StyledInputLabel>
        <StyledToggleButtonGroup exclusive onChange={onChangeHandler} value={sex}>
          <StyledToggleButton name="sex" value="male">
            남자
          </StyledToggleButton>
          <StyledToggleButton name="sex" value="female">
            여자
          </StyledToggleButton>
        </StyledToggleButtonGroup>
      </form>
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

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
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
