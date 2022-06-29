import { Box, Input, InputLabel, Slider, styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Year from '../components/matching/Year';
import Level from '../components/matching/Level';

const Matching = () => {
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
    <div>
      <Box sx={{ height: '60px', display: 'flex', alignItems: 'center', paddingLeft: '29px', marginBottom: '44px' }}>
        <ArrowBackIosNewIcon sx={{ marginRight: '9px' }} />
        매칭만들기
      </Box>
      <Box sx={{ padding: '0 20px' }} component="form" noValidate autoComplete="off">
        <Box sx={{ marginBottom: '51px' }} component="div">
          <StyledLabel htmlFor="court">코트장 선택</StyledLabel>
          <StyledInput fullWidth disableUnderline={true} id="court" />
        </Box>
        <Box sx={{ marginBottom: '51px' }} component="div">
          <StyledLabel htmlFor="date">일시</StyledLabel>
          <StyledInput fullWidth disableUnderline={true} id="date" />
        </Box>
        <Year />
        <Level />
      </Box>
    </div>
  );
};

export default Matching;
