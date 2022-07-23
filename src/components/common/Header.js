import React from 'react';
import { useNavigate } from 'react-router';

import { Box } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Header = ({ title }) => {
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
        backgroundColor: '#fff',
        zIndex: '10',
      }}
    >
      <ArrowBackIosNewIcon
        onClick={() => {
          navigate(-1);
        }}
        sx={{ marginRight: '9px', cursor: 'pointer' }}
      />
      {title}
    </Box>
  );
};

export default Header;
