import { Box, Button } from '@mui/material';
import { bgcolor } from '@mui/system';
import { useState } from 'react';
import Address from './Address';
import Capacity from './Capacity';
import Time from './Time';
import Calendal from './Calendal';

const Search = () => {
  const [isAddressModal, setIsAddressModal] = useState(false);
  const [isDateModal, setIsDateModal] = useState(false);
  const [isTimeModal, setIsTimeModal] = useState(false);
  const [isCapacityModal, setIsCapacityModal] = useState(false);

  const closeModalHandler = () => {
    if (isAddressModal) setIsAddressModal(!isAddressModal);
    if (isDateModal) setIsDateModal(!isDateModal);
    if (isTimeModal) setIsTimeModal(!isTimeModal);
    if (isCapacityModal) setIsCapacityModal(!isCapacityModal);
  };

  const addressModalHandler = () => {
    setIsAddressModal(!isAddressModal);
  };

  const dateModalHandler = () => {
    setIsDateModal(!isDateModal);
  };

  const timeModalHandler = () => {
    setIsTimeModal(!isTimeModal);
  };

  const capacityModalHandler = () => {
    setIsCapacityModal(!isCapacityModal);
  };

  return (
    <Box component="div" sx={{ width: 1, height: 1, backgroundColor: 'lightgray', position: 'relative' }}>
      <Box component="div" sx={{ p: 1, display: 'flex', justifyContent: 'space-between' }}>
        <Box component="div">검색하기</Box>
        <Button onClick={closeModalHandler}>X</Button>
      </Box>
      {isAddressModal && <Address />}
      {isDateModal && <Calendal />}
      {isTimeModal && <Time />}
      {isCapacityModal && <Capacity />}
      <Box component="div">
        <Box component="div" sx={{ p: 1 }}>
          <Box component="div" sx={{ width: 335, heigth: 122, m: 'auto', borderRadius: '10px', bgcolor: 'white' }}>
            <Box component="div" sx={{ py: 1, pl: 3 }}>
              지역
            </Box>
            <Box component="div" sx={{ width: 303, height: 40, m: 'auto', borderRadius: '10px', bgcolor: 'lightgray' }}>
              <Button
                variant="contained"
                sx={{ width: 1, height: 1, bgcolor: 'lightgray', color: 'black' }}
                onClick={addressModalHandler}
              >
                시/구를 입력해 주세요
              </Button>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              width: 335,
              height: 70,
              bgcolor: 'white',
              m: 'auto',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 1,
              px: 3,
              py: 3,
            }}
            onClick={dateModalHandler}
          >
            <Box component="div">날짜</Box>
            <Box component="div" sx={{ color: 'lightgray' }}>
              선택 안함
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              width: 335,
              height: 70,
              bgcolor: 'white',
              m: 'auto',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 1,
              px: 3,
              py: 3,
            }}
            onClick={timeModalHandler}
          >
            <Box component="div">시간</Box>
            <Box component="div" sx={{ color: 'lightgray' }}>
              선택 안함
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              width: 335,
              height: 70,
              bgcolor: 'white',
              m: 'auto',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 1,
              px: 3,
              py: 3,
            }}
            onClick={capacityModalHandler}
          >
            <Box component="div">구력</Box>
            <Box component="div" sx={{ color: 'lightgray' }}>
              선택 안함
            </Box>
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
          }}
          // onClick={capacityModalHandler}
        >
          <Button sx={{ textDecoration: 'underline' }}>전체 삭제</Button>
          <Button
            sx={{ bgcolor: '#0027FD', width: '100px', height: '50px', borderRadius: '10px', color: 'white', my: 3 }}
          >
            검색
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
