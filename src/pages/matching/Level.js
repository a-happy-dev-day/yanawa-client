import React, { useState, useEffect } from 'react';
import { Box, InputLabel, Slider, styled } from '@mui/material';

const Level = ({ matchingData, setMatchingData }) => {
  const [level, setLevel] = useState([1, 2.5]);

  useEffect(() => {
    setMatchingData({
      ...matchingData,
      minimumLevel: level[0],
      maximumLevel: level[1],
    });
  }, [level]);

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

  const handleLevelChange = (event, newLevel) => {
    setLevel(newLevel);
  };

  return (
    <Box sx={{ marginBottom: '46px' }} fullWidth>
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
  );
};

export default Level;

const StyledLabel = styled(InputLabel)`
  font-size: 12px;
  color: #707070;
  margin-bottom: 11px;
`;
