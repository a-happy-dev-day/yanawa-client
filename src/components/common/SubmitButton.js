import { Button, styled } from '@mui/material';
import React from 'react';

const SubmitButton = ({ title, bgcolor }) => {
  const StyledButton = styled(Button)({
    height: '50px',
    backgroundColor: bgcolor,
    borderRadius: '10px',
  });

  return (
    <StyledButton variant="contained" fullWidth>
      {title}
    </StyledButton>
  );
};

export default SubmitButton;
