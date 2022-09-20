import React, { useState } from 'react';
import {
  Avatar,
  Badge,
  Box,
  InputLabel,
  styled,
  Typography,
  Slider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import bg from '../../assets/images/bg.png';
import profile1 from '../../assets/images/profile1.png';

import Header from '../../components/common/Header';

import SettingsIcon from '@mui/icons-material/Settings';

const MyInfo = () => {
  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 36.5,
      label: '36.5°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div style={{ height: '100vh', position: 'relative', backgroundColor: '#f9f9f9', overflow: 'scroll' }}>
      <Header color="#292929" title="내 정보" />
      <StyledBgImg />
      <Box sx={{ padding: '0 20px', marginTop: '-100px', marginBottom: '51px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 20px 15px 16px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            marginBottom: '9px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge overlap="circular" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
              <Avatar sx={{ width: '50px', height: '50px' }} alt="profile" src={profile1} />
            </Badge>
            <Typography sx={{ marginLeft: '12px', fontSize: '14px', fontWeight: '500' }}>테린이</Typography>

            <SettingsIcon sx={{ padding: '0px 0px 0px 3px', marginLeft: '170px', color: '#707070' }} />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 20px 15px 16px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            marginBottom: '9px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              sx={{
                marginLeft: '12px',
                fontSize: '14px',
                fontWeight: '500',
                alignItems: 'center',
                marginLeft: '130px',
              }}
            >
              레벨 2.0
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
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              sx={{
                marginLeft: '12px',
                fontSize: '12px',
                fontWeight: '500',
                alignItems: 'center',
              }}
            >
              매너온도
            </Typography>
            <StyledText sx={{ color: 'blue', padding: '0px 0px 0px 200px' }}>36.5</StyledText>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            aligenItems: 'center',
            fontSize: '12px',
            padding: '20px 20px 20px 20px',
            marginBottom: '9px',
            color: '#707070',
          }}
        >
          <Slider
            aria-label="Custom marks"
            defaultValue={20}
            getAriaValueText={valuetext}
            step={0.5}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </Box>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <StyledLabel
              htmlFor="comment"
              sx={{
                marginLeft: '10px',
                fontSize: '12px',
                fontWeight: '600',
                alignItems: 'center',
              }}
            >
              히스토리
            </StyledLabel>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px 20px 15px 16px',
                backgroundColor: '#fff',
                borderRadius: '10px',
                marginBottom: '9px',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '15px 17px 15px 20px',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    margin: '10px 0 24px',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}></Box>
                  <Box sx={{ display: 'flex' }}>
                    <Avatar sx={{ width: 40, height: 40, marginRight: '5px' }} />
                    <Avatar sx={{ width: 40, height: 40, marginRight: '5px' }} />
                    <Avatar sx={{ width: 40, height: 40, marginRight: '5px' }} />
                    <Avatar sx={{ width: 40, height: 40 }} />
                  </Box>
                </Box>
                <StyledText sx={{ color: '#707070', padding: '0px 0px 0px 30px' }}>평가하기</StyledText>
              </Box>
            </Box>
          </AccordionDetails>

          <AccordionDetails>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px 20px 15px 16px',
                backgroundColor: '#fff',
                borderRadius: '10px',
                marginBottom: '9px',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '15px 17px 15px 20px',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    margin: '10px 0 24px',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}></Box>
                  <Box sx={{ display: 'flex' }}>
                    <Avatar sx={{ width: 40, height: 40, marginRight: '5px' }} />
                    <Avatar sx={{ width: 40, height: 40, marginRight: '5px' }} />
                    <Avatar sx={{ width: 40, height: 40, marginRight: '5px' }} />
                    <Avatar sx={{ width: 40, height: 40 }} />
                  </Box>
                </Box>
                <StyledText sx={{ color: '#707070', padding: '0px 0px 0px 30px' }}>평가하기</StyledText>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default MyInfo;

const StyledBgImg = styled(Box)({
  height: '210px',
  background: `url(${bg})`,
});

const StyledText = styled(Typography)({
  fontSize: '12px',
  color: '#292929',
});

const StyledLabel = styled(InputLabel)`
  font-size: 12px;
  color: '#292929',
  margin-bottom: 11px;
`;
