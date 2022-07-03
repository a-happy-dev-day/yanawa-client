import { Box, styled, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

const NumberOfPeople = () => {
  const [people, setPeople] = useState(0);

  const option = [
    { value: 1, name: '1명' },
    { value: 2, name: '2명' },
    { value: 3, name: '3명' },
    { value: 4, name: '4명' },
    { value: 5, name: '5명' },
    { value: 6, name: '6명' },
    { value: 7, name: '7명' },
    { value: 8, name: '8명' },
  ];

  const handleChange = (event) => {
    setPeople(event.target.value);
  };

  const StyledLabel = styled(InputLabel)`
    font-size: 12px;
    color: #707070;
    margin-bottom: 11px;
  `;
  return (
    <Box sx={{ marginBottom: '44px' }} component="div">
      <StyledLabel htmlFor="people">모집인원</StyledLabel>
      <Select placeholder="시범" fullWidth labelId="people" id="people" value={people} onChange={handleChange}>
        <MenuItem value={1}>1명</MenuItem>
        <MenuItem value={2}>2명</MenuItem>
        <MenuItem value={3}>3명</MenuItem>
        <MenuItem value={4}>4명</MenuItem>
        <MenuItem value={5}>5명</MenuItem>
        <MenuItem value={6}>6명</MenuItem>
        <MenuItem value={7}>7명</MenuItem>
        <MenuItem value={8}>8명</MenuItem>
      </Select>
    </Box>
  );
};

export default NumberOfPeople;
