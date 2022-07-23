import { Avatar, Box, styled } from '@mui/material';
import React from 'react';
import courtImg from '../../assets/images/court-1.png';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const MatchingResult = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <IconContainer>
        <Avatar sx={{ background: '#fff', marginRight: '10px' }}>
          <FavoriteBorderOutlinedIcon sx={{ color: '#000' }} />
        </Avatar>
        <Avatar sx={{ background: '#fff' }}>
          <ShareOutlinedIcon sx={{ color: '#000' }} />
        </Avatar>
      </IconContainer>
    </div>
  );
};

export default MatchingResult;

const Header = styled(Box)({
  height: '210px',
  background: `url(${courtImg})`,
});

const IconContainer = styled(Box)({
  display: 'flex',
  position: 'absolute',
  right: '18px',
  top: '17px',
});
