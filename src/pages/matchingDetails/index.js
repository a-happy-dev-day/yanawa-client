import React, { useState } from 'react';
import { Avatar, Badge, Box, Divider, List, ListItem, styled, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import courtImg from '../../assets/images/court-1.png';
import profile from '../../assets/images/profile.png';
import crown from '../../assets/images/crown.png';
import Header from '../../components/common/Header';
import SubmitButton from '../../components/common/SubmitButton';

const MatchingDetails = () => {
  const [matchingItems, setMatchingItems] = useState([
    {
      title: '코트',
      value: '서울 보라매공원테니스장',
    },
    {
      title: '일시',
      value: '2022.04.09(토) 18:00~20:00',
    },
    {
      title: '선호게임',
      value: '매칭',
    },
    {
      title: '모집성별',
      value: '상관없음',
    },
    {
      title: '모집인원',
      value: '2명',
    },
    {
      title: '구력',
      value: '2년 이하',
    },
    {
      title: '레벨',
      value: '1.0~2.0',
    },
    {
      title: '모집연령',
      value: '무관',
    },
    {
      title: '1인 코트비용',
      value: '3,600원',
    },
  ]);

  return (
    <div style={{ height: '100vh', position: 'relative', backgroundColor: '#f9f9f9', overflow: 'scroll' }}>
      <Header color="#fff" title="자세히 보기" />
      <StyledBgImg />
      <IconContainer>
        <Avatar sx={{ background: '#fff', marginRight: '10px' }}>
          <FavoriteBorderOutlinedIcon sx={{ color: '#000' }} />
        </Avatar>
        <Avatar sx={{ background: '#fff' }}>
          <ShareOutlinedIcon sx={{ color: '#000' }} />
        </Avatar>
      </IconContainer>
      <Box sx={{ padding: '0 20px', marginTop: '-40px', marginBottom: '51px' }}>
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
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              badgeContent={<SmallAvatar alt="host" />}
            >
              <Avatar sx={{ width: '50px', height: '50px' }} alt="profile" src={profile} />
            </Badge>
            <Typography sx={{ marginLeft: '12px', fontSize: '14px', fontWeight: '500' }}>나희도</Typography>
          </Box>
          <ArrowForwardIosIcon fontSize="small" />
        </Box>
        <Box sx={{ backgroundColor: '#fff', borderRadius: '10px', paddingX: '16px' }}>
          <List sx={{ padding: 0 }}>
            {matchingItems.map((item) => (
              <ListItem key={item.title} sx={{ padding: '16px 0 18px', borderBottom: '1px solid #F4F4F4' }}>
                <Box sx={{ display: 'flex' }}>
                  <StyledText sx={{ display: 'block', width: '83px' }}>{item.title}</StyledText>
                  <StyledText sx={{ color: '#707070' }}>{item.value}</StyledText>
                </Box>
              </ListItem>
            ))}
            <Box sx={{ padding: '16px 17px 35px 0', borderTop: '8px solid #f4f4f4' }}>
              <StyledText sx={{ display: 'block', width: '83px' }}>남길 말</StyledText>
              <StyledText sx={{ color: '#707070' }}>랠리 및 게임하실 여성 1분 모집합니다. 편하게 연락주세요</StyledText>
            </Box>
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
            margin: '10px 0 24px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '12px', fontWeight: '500', color: '#292929' }}>매칭멤버</Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Avatar sx={{ width: 50, height: 50, marginRight: '5px' }} />
            <Avatar sx={{ width: 50, height: 50, marginRight: '5px' }} />
            <Avatar sx={{ width: 50, height: 50, marginRight: '5px' }} />
            <Avatar sx={{ width: 50, height: 50 }} />
          </Box>
        </Box>
        <SubmitButton bgcolor="#343a40" title="참여하기"></SubmitButton>
      </Box>
    </div>
  );
};

export default MatchingDetails;

const StyledBgImg = styled(Box)({
  height: '210px',
  background: `url(${courtImg})`,
});

const IconContainer = styled(Box)({
  display: 'flex',
  position: 'absolute',
  right: '18px',
  top: '17px',
});

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 16,
  height: 16,
  background: `no-repeat center/12px 8px url(${crown}) #fff`,
  '& .MuiAvatar-fallback': {
    display: 'none',
  },
}));

const StyledText = styled(Typography)({
  fontSize: '12px',
  color: '#292929',
});
