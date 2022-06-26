import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import './Calendal.css';

const Calendal = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    if (startDate > endDate) setStartDate(endDate);
  }, [endDate]);

  useEffect(() => {
    if (startDate > endDate) setEndDate(startDate);
  }, [startDate]);

  const formatDate = (dateInput) => {
    const date = new Date(dateInput);
    const monthIndex = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}년 ${monthIndex}월`;
  };

  const onChange = (dates) => {
    setStartDate(dates);
    console.log(startDate);
  };

  return (
    <Box sx={{ bgcolor: 'white', width: 1, height: 765, position: 'absolute', bottom: 0, zIndex: 10 }}>
      <Box component="div" sx={{ width: 335, height: 50, fontSize: 16, pl: 3, lineHeight: 3 }}>
        날짜를 선택하세요
      </Box>

      <Box component="div" sx={{ position: 'relative', width: 1 }}>
        <ReactDatePicker
          onChange={onChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          locale={ko}
          inline
          nextMonthButtonLabel=">"
          previousMonthButtonLabel="<"
          // popperPlacement="auto"
          popperClassName="react-datepicker-left"
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => {
            return (
              <Box
                component="div"
                sx={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center', width: 1 }}
              >
                <Button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                  &lt;
                </Button>
                <Box component="div">{formatDate(date)}</Box>
                <Button disabled={nextMonthButtonDisabled} onClick={increaseMonth}>
                  &gt;
                </Button>
              </Box>
            );
          }}
        />

        <Box
          component="div"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 10, mx: 'auto' }}
          className="flex items-center justify-center max-w-2xl py-20 mx-auto space-x-4"
        ></Box>
      </Box>
      <Box
        component="div"
        sx={{
          position: 'absolute',
          width: 373,
          height: 100,
          bottom: 0,
          bgcolor: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          px: 3,
          bgcolor: 'lightgray',
        }}
      >
        <Button sx={{ textDecoration: 'underline' }}>초기화</Button>
        <Button
          sx={{ bgcolor: '#0027FD', width: '100px', height: '50px', borderRadius: '10px', color: 'white', my: 3 }}
        >
          검색
        </Button>
      </Box>
    </Box>
  );
};

export default Calendal;
