import { Box, InputLabel, styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';

const Year = ({ onChangeHandler, annual }) => {
  return (
    <Box sx={{ marginBottom: '51px' }} component="div">
      <StyledLabel htmlFor="annual">구력</StyledLabel>
      <StyledToggleButtonGroup
        id="annual"
        onChange={onChangeHandler}
        value={String(annual)}
        exclusive
        fullWidth
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <StyledToggleButton name="annual" value="2">
          2년 이하
        </StyledToggleButton>
        <StyledToggleButton name="annual" value="4">
          2 - 5 년
        </StyledToggleButton>
        <StyledToggleButton name="annual" value="5">
          5년 이상
        </StyledToggleButton>
      </StyledToggleButtonGroup>
    </Box>
  );
};

export default Year;

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
