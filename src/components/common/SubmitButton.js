import { Button, styled } from '@mui/material';
import React from 'react';

const SubmitButton = ({ title, bgcolor, onClickHandler }) => {
  const StyledButton = styled(Button)({
    height: '50px',
    backgroundColor: bgcolor,
    borderRadius: '10px',
    marginBottom: '100px',
  });

  return (
    <StyledButton onClick={onClickHandler} variant="contained" fullWidth>
      {title}
    </StyledButton>
  );
};

export default SubmitButton;
