import { Box, InputLabel, styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';

const Sex = ({ onChangeHandler, sexOfRecruitment }) => {
  return (
    <Box sx={{ marginBottom: '51px' }} component="div">
      <StyledLabel htmlFor="age">모집성별</StyledLabel>
      <StyledToggleButtonGroup
        onChange={onChangeHandler}
        value={sexOfRecruitment}
        name="sexOfRecruitment"
        exclusive
        fullWidth
        sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}
      >
        <StyledToggleButton name="sexOfRecruitment" value="남자">
          남자만
        </StyledToggleButton>
        <StyledToggleButton name="sexOfRecruitment" value="여자">
          여자만
        </StyledToggleButton>
        <StyledToggleButton name="sexOfRecruitment" value="무관">
          상관없음
        </StyledToggleButton>
      </StyledToggleButtonGroup>
    </Box>
  );
};

export default Sex;

const StyledLabel = styled(InputLabel)`
  font-size: 12px;
  color: #707070;
  margin-bottom: 11px;
`;
const StyledToggleButton = styled(ToggleButton)({
  width: '105px',
  height: '42px',
  color: '#707070',
  fontSize: '12px',
  border: '1px solid #707070',
});

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    '&:not(:first-of-type)': {
      borderRadius: '10px',
      margin: '0px',
      borderLeft: '1px solid #707070',
    },
    '&:first-of-type': {
      borderRadius: '10px',
    },
    '&.Mui-selected': {
      border: '1px solid #0027FD',
      backgroundColor: '#fff',
      color: '#0027FD',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
  },
}));
