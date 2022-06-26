import { Box, Button } from '@mui/material';
import { useState } from 'react';

const timeData = [
  {
    time: '오전 06시',
  },
  {
    time: '오전 07시',
  },
  {
    time: '오전 08시',
  },
  {
    time: '오전 09시',
  },
  {
    time: '오전 10시',
  },
  {
    time: '오전 11시',
  },
  {
    time: '오후 12시',
  },
  {
    time: '오후 12시',
  },
  {
    time: '오후 01시',
  },
  {
    time: '오후 02시',
  },
  {
    time: '오후 03시',
  },
  {
    time: '오후 04시',
  },
  {
    time: '오후 05시',
  },
  {
    time: '오후 06시',
  },
  {
    time: '오후 07시',
  },
  {
    time: '오후 08시',
  },
];

const Time = () => {
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const startTimeHandler = (i) => {
    setStartTime(i);
  };

  const endTimeHandler = (i) => {
    setEndTime(i);
  };

  return (
    <Box sx={{ bgcolor: 'white', width: 1, height: 765, position: 'absolute', bottom: 0, zIndex: 10 }}>
      <Box component="div" sx={{ widht: 1, height: 50, fontSize: 15, lineHeight: 3, pl: 3, fontWeight: 'bold' }}>
        시간을 선택하세요
      </Box>
      <Box component="div">
        <Box component="div" sx={{ widht: 335, height: 40, fontSize: 15, lineHeight: 3, pl: 3 }}>
          시작 시간
        </Box>
        <Box sx={{ widht: 1, height: 200, m: 'auto', overflow: 'auto', textAlign: 'center' }}>
          {timeData.map((data, i) => (
            <Box
              component="div"
              onClick={() => startTimeHandler(i)}
              key={i}
              sx={
                startTime === i
                  ? {
                      width: 335,
                      height: 40,
                      textAlign: 'center',
                      display: 'inline-block',
                      fontSize: 15,
                      bgcolor: '#B3BEFE',
                      borderRadius: '10px',
                      lineHeight: 3,
                    }
                  : {
                      width: 335,
                      height: 40,
                      textAlign: 'center',
                      display: 'inline-block',
                      fontSize: 15,
                      borderRadius: '10px',
                      lineHeight: 3,
                    }
              }
            >
              {data.time}
            </Box>
          ))}
        </Box>
      </Box>
      <Box component="div">
        <Box sx={{ widht: 335, height: 40, fontSize: 15, lineHeight: 3, pl: 3 }}>종료 시간</Box>
        <Box sx={{ widht: 1, height: 200, m: 'auto', overflow: 'auto', textAlign: 'center' }}>
          {timeData.map((data, i) => (
            <Box
              component="div"
              onClick={() => endTimeHandler(i)}
              key={i}
              sx={
                endTime === i
                  ? {
                      width: 335,
                      height: 40,
                      textAlign: 'center',
                      display: 'inline-block',
                      fontSize: 15,
                      bgcolor: '#B3BEFE',
                      borderRadius: '10px',
                      lineHeight: 3,
                    }
                  : {
                      width: 335,
                      height: 40,
                      textAlign: 'center',
                      display: 'inline-block',
                      fontSize: 15,
                      borderRadius: '10px',
                      lineHeight: 3,
                    }
              }
            >
              {data.time}
            </Box>
          ))}
        </Box>
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

export default Time;
