import React, { useState } from 'react';

import { Box, Button, styled } from '@mui/material';
import ko from 'date-fns/locale/ko';
// import './calendal.css';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const MatchingDate = () => {
  const [startDate, setStartDate] = useState(new Date());

  const onChange = (dates) => {
    setStartDate(dates);
  };

  return (
    <Box>
      <StyledDatePicker
        minDate={new Date()}
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        selected={startDate}
        onChange={onChange}
      />
    </Box>
  );
};

export default MatchingDate;

const StyledDatePicker = styled(DatePicker)({
  width: '100%',
  fontSize: '28px',
  border: 'none',
  color: '#434343',
});
