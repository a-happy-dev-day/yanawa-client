import { Box, Button } from '@mui/material';
import { useState } from 'react';

const capacityData = [
  {
    capacity: '1년',
    key: '1',
  },
  {
    capacity: '2년',
    key: '2',
  },
  {
    capacity: '3년',
    key: '3',
  },
  {
    capacity: '4년',
    key: '4',
  },
  {
    capacity: '5년',
    key: '5',
  },
  {
    capacity: '6년',
    key: '6',
  },
  {
    capacity: '7년',
    key: '7',
  },
  {
    capacity: '8년',
    key: '8',
  },
  {
    capacity: '9년',
    key: '9',
  },
  {
    capacity: '10년',
    key: '10',
  },
];

const Capacity = () => {
  const [activeIndex, setActiveIndex] = useState();

  const setCapacity = (i) => {
    setActiveIndex(i);
  };

  return (
    <Box component="div" sx={{ bgcolor: 'white', width: 1, height: 765, position: 'absolute', bottom: 0, zIndex: 10 }}>
      <Box component="div">
        <Box component="div" sx={{ width: 335, height: 50, fontSize: 16, pl: 3, lineHeight: 3 }}>
          구력을 선택하세요
        </Box>
        <Box component="div" sx={{ width: 1, height: 200, m: 'auto', overflow: 'auto', textAlign: 'center' }}>
          {capacityData.map((data, i) => (
            <Box
              component="div"
              onClick={() => setCapacity(i)}
              key={i}
              sx={
                activeIndex === i
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
              {data.capacity}
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

export default Capacity;
