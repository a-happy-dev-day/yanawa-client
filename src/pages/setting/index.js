import React from 'react';
import { Box, styled, Typography } from '@mui/material';

import Header from '../../components/common/Header';

const Setting = () => {
  return (
    <div style={{ height: '100vh', position: 'relative', backgroundColor: '#fff', overflow: 'scroll' }}>
      <Header color="#292929" title="설정" />
      <StyledBgImg />
      <Box sx={{ padding: '0 20px', marginTop: '-120px', marginBottom: '30px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 20px 15px 16px',
            backgroundColor: '#fff',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Typography
              sx={{
                marginLeft: '12px',
                fontSize: '14px',
                fontWeight: '500',
                alignItems: 'center',
              }}
            >
              계정
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 10px 5px 16px',
            backgroundColor: '#fff',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Typography
              sx={{
                marginLeft: '30px',
                fontSize: '14px',
                fontWeight: '500',
                alignItems: 'center',
              }}
            >
              로그아웃
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 20px 15px 16px',
            backgroundColor: '#fff',
            marginBottom: '9px',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Typography
              sx={{
                marginLeft: '30px',
                fontSize: '14px',
                fontWeight: '500',
                alignItems: 'center',
              }}
            >
              회원탈퇴
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Setting;

const StyledBgImg = styled(Box)({
  height: '210px',
});

const StyledText = styled(Typography)({
  fontSize: '12px',
  color: '#292929',
});
