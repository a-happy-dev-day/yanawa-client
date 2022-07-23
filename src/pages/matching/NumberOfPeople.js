import { Box, styled, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';

const NumberOfPeople = ({ onChangeHandler, numberOfNumber }) => {
  const options = [
    { value: 1, name: '1명' },
    { value: 2, name: '2명' },
    { value: 3, name: '3명' },
    { value: 4, name: '4명' },
    { value: 5, name: '5명' },
    { value: 6, name: '6명' },
    { value: 7, name: '7명' },
    { value: 8, name: '8명' },
  ];
  const ITEM_HEIGHT = 42;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <Box sx={{ marginBottom: '44px' }} component="div">
      <StyledLabel htmlFor="people">모집인원</StyledLabel>
      <StyledSelect
        fullWidth
        displayEmpty
        defaultValue={numberOfNumber}
        renderValue={
          numberOfNumber !== 0 ? undefined : () => <Placeholder>모집 인원을 선택해 주세요 (최대 8명)</Placeholder>
        }
        id="people"
        value={numberOfNumber}
        onChange={onChangeHandler}
        name="numberOfNumber"
        MenuProps={MenuProps}
      >
        {options.map((option, id) => (
          <StyledMenuItem key={id} value={option.value}>
            {option.name}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </Box>
  );
};

export default NumberOfPeople;

const StyledLabel = styled(InputLabel)`
  font-size: 12px;
  color: #707070;
  margin-bottom: 11px;
`;

const StyledSelect = styled(Select)({
  borderRadius: '10px',
  fontSize: '12px',
});

const StyledMenuItem = styled(MenuItem)`
  font-size: 12px;
  padding: 13px 0 13px 16px;
`;

const Placeholder = styled(Typography)`
  font-size: 12px;
  color: #cbcbcb;
`;
