import { Box, InputLabel, styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';

const Sex = () => {
  const [sex, setSex] = useState('1');

  const handleSexChange = (event, newSex) => {
    setSex(newSex);
  };

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
  return (
    <Box sx={{ marginBottom: '51px' }} component="div">
      <StyledLabel htmlFor="age">모집성별</StyledLabel>
      <StyledToggleButtonGroup
        onChange={handleSexChange}
        value={sex}
        exclusive
        fullWidth
        sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}
      >
        <StyledToggleButton value="남자">남자만</StyledToggleButton>
        <StyledToggleButton value="여자">여자만</StyledToggleButton>
        <StyledToggleButton value="무관">상관없음</StyledToggleButton>
      </StyledToggleButtonGroup>
    </Box>
  );
};

export default Sex;
