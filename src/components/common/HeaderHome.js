import React from 'react';
import { useNavigate } from 'react-router';

import homeImg from '../../assets/images/homeImg.png';
import { Box, styled } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SvgIcon from '@mui/material/SvgIcon';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const HeaderHome = ({ title, bgColor, color }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '60px',
        width: '375px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '29px',
        marginBottom: '44px',
        position: 'absolute',
        backgroundColor: bgColor,
        color: color,
        zIndex: '10',
        top: '0',
        left: '0',
      }}
    >
      {/* <StyledHomeImg /> */}
      {/* <ArrowBackIosNewIcon
        onClick={() => {
          navigate(-1);
        }}
        sx={{ marginRight: '9px', cursor: 'pointer' }}
      /> */}
      <Box
        sx={{
          '& > :not(style)': {
            m: 2,
          },
        }}
      >
        <HomeIcon
          fontSize="large"
          onClick={() => {
            navigate(-1);
          }}
        />
      </Box>
    </Box>
  );
};

export default HeaderHome;

const StyledHomeImg = styled(Box)({
  height: '210px',
  background: `url(${homeImg})`,
});

const itemData = [
  {
    img: '../../assets/images/homeImg.png',
    title: 'yanawa',
  },
];
