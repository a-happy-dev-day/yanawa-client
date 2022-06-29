import { Box, Input, InputLabel, Slider, styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Year from '../components/matching/Year';

const Matching = () => {
  const [level, setLevel] = useState([1, 2.5]);

  const handleLevelChange = (event, newLevel) => {
    setLevel(newLevel);
  };

  const marks = [
    {
      value: 0,
      label: '0.0',
    },
    {
      value: 1.5,
      label: '1.5',
    },
    {
      value: 3.0,
      label: '3.0',
    },
    {
      value: 4.5,
      label: '4.5',
    },
    {
      value: 6.0,
      label: '6.0',
    },
  ];

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
        <Box fullWidth>
          <StyledLabel htmlFor="year">NTRP 레벨</StyledLabel>
          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={level}
            onChange={handleLevelChange}
            valueLabelDisplay="auto"
            min={0}
            max={7}
            step={0.5}
            marks={marks}
            size="small"
          />
        </Box>
      </Box>
    </div>
  );
};

export default Matching;
