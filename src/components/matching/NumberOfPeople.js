import { Box, styled, InputLabel, MenuItem, Select, Typography } from '@mui/material';
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

  const StyledSelect = styled(Select)({
    height: '42px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    fontSize: '12px',
  });

  const StyledMenuItem = styled(MenuItem)`
    background-color: #f4f4f4;
    font-size: 12px;
    padding: 13px 0 13px 16px;
  `;

  const Placeholder = styled(Typography)`
    font-size: 12px;
    color: #cbcbcb;
  `;

  return (
    <Box sx={{ marginBottom: '44px' }} component="div">
      <StyledLabel htmlFor="people">모집인원</StyledLabel>
      {/* <StyledSelect
        fullWidth
        displayEmpty
        renderValue={people !== 0 ? undefined : () => <Placeholder>모집 인원을 선택해 주세요 (최대 8명)</Placeholder>}
        id="people"
        value={people}
        onChange={handleChange}
      >
        <StyledMenuItem value={1}>1명</StyledMenuItem>
        <StyledMenuItem value={2}>2명</StyledMenuItem>
        <StyledMenuItem value={3}>3명</StyledMenuItem>
        <StyledMenuItem value={4}>4명</StyledMenuItem>
        <StyledMenuItem value={5}>5명</StyledMenuItem>
        <StyledMenuItem value={6}>6명</StyledMenuItem>
        <StyledMenuItem value={7}>7명</StyledMenuItem>
        <StyledMenuItem value={8}>8명</StyledMenuItem>
      </StyledSelect> */}
    </Box>
  );
};

export default NumberOfPeople;
