import React, { useState } from 'react';
import { Avatar, Badge, Box, Divider, List, ListItem, styled, Typography } from '@mui/material';

import courtImg2 from '../../assets/images/court-2.png';
import profile1 from '../../assets/images/profile1.png';
import Header from '../../components/common/Header';

const Review = () => {
  const [reviewItems, setReviewItems] = useState([
    {
      title: '코트',
      value: '서울 보라매공원테니스장',
    },
    {
      title: '일시',
      value: '2022.04.09(토) 18:00~20:00',
    },
  ]);

  return (
    <div style={{ height: '100vh', position: 'relative', backgroundColor: '#f9f9f9', overflow: 'scroll' }}>
      <Header color="#fff" title="평가히기" />
      <StyledBgImg />
      <Box sx={{ padding: '0 20px', marginTop: '-100px', marginBottom: '51px' }}>
        <Box sx={{ backgroundColor: '#fff', borderRadius: '10px', paddingX: '16px' }}>
          <List sx={{ padding: 0 }}>
            {reviewItems.map((item) => (
              <ListItem key={item.title} sx={{ padding: '16px 0 18px', borderBottom: '1px solid #F4F4F4' }}>
                <Box sx={{ display: 'flex' }}>
                  <StyledText sx={{ display: 'block', width: '83px' }}>{item.title}</StyledText>
                  <StyledText sx={{ color: '#707070' }}>{item.value}</StyledText>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 17px 15px 20px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            margin: '10px 0 px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '12px', fontWeight: '500', color: '#292929' }}>매칭멤버</Typography>
            <List sx={{ padding: 0 }}>
              <ListItem sx={{ padding: '16px 0 18px', borderBottom: '1px solid #F4F4F4' }}>
                <Box sx={{ display: 'flex' }}></Box>
              </ListItem>
            </List>
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
            <Badge overlap="circular" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
              <Avatar sx={{ width: '50px', height: '50px' }} alt="profile" src={profile1} />
            </Badge>
            <Typography sx={{ marginLeft: '12px', fontSize: '14px', fontWeight: '500' }}>나희도</Typography>
            <StyledText sx={{ color: '#707070', padding: '0px 0px 0px 150px' }}>평가하기</StyledText>
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
            <Badge overlap="circular" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
              <Avatar sx={{ width: '50px', height: '50px' }} alt="profile" src={profile1} />
            </Badge>
            <Typography sx={{ marginLeft: '12px', fontSize: '14px', fontWeight: '500' }}>김철</Typography>
            <StyledText sx={{ color: '#707070', padding: '0px 0px 0px 162px' }}>평가하기</StyledText>
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
            <Badge overlap="circular" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
              <Avatar sx={{ width: '50px', height: '50px' }} alt="profile" src={profile1} />
            </Badge>
            <Typography sx={{ marginLeft: '12px', fontSize: '14px', fontWeight: '500' }}>스매싱</Typography>
            <StyledText sx={{ color: '#707070', padding: '0px 0px 0px 150px' }}>평가하기</StyledText>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Review;

const StyledBgImg = styled(Box)({
  height: '210px',
  background: `url(${courtImg2})`,
});

const StyledText = styled(Typography)({
  fontSize: '12px',
  color: '#292929',
});
