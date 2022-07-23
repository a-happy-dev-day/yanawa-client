import React, { useState, useEffect } from 'react';
import { Box, Input, InputLabel, styled } from '@mui/material';

const Cost = ({ matchingData, setMatchingData }) => {
  const [num, setNum] = useState('');

  useEffect(() => {
    let number = Number(num.replace(/,/g, ''));
    setMatchingData({
      ...matchingData,
      costOfCourtPerPerson: number,
    });
  }, [num]);

  const inputPriceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, '');
    };
    return comma(uncomma(str));
  };

  return (
    <Box sx={{ marginBottom: '44px' }} component="div">
      <StyledLabel htmlFor="date">코트비용</StyledLabel>
      <StyledInput
        type="text"
        value={num}
        name="costOfCourtPerPerson"
        onChange={(e) => {
          setNum(inputPriceFormat(e.target.value));
        }}
        fullWidth
        disableUnderline={true}
        id="cost"
      />
    </Box>
  );
};

export default Cost;

const StyledLabel = styled(InputLabel)`
  font-size: 12px;
  color: #707070;
  margin-bottom: 11px;
`;
const StyledInput = styled(Input)`
  font-size: 24px;
  color: #434343;
`;
