import React from 'react';
import { Box, Input, InputLabel, styled } from '@mui/material';

const Cost = () => {
  const StyledLabel = styled(InputLabel)`
    font-size: 12px;
    color: #707070;
    margin-bottom: 11px;
  `;
  const StyledInput = styled(Input)`
    font-size: 24px;
    color: #434343;
  `;
  return (
    <Box sx={{ marginBottom: '44px' }} component="div">
      <StyledLabel htmlFor="date">코트비용</StyledLabel>
      <StyledInput fullWidth disableUnderline={true} id="cost" />
    </Box>
  );
};

export default Cost;
