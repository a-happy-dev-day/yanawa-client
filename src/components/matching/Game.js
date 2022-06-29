import { Box, InputLabel, styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';

const Game = () => {
  const [game, setGame] = useState('1');

  const handleGameChange = (event, newGame) => {
    setGame(newGame);
  };

  const StyledLabel = styled(InputLabel)`
    font-size: 12px;
    color: #707070;
    margin-bottom: 11px;
  `;
  const StyledToggleButton = styled(ToggleButton)({
    width: '162px',
    height: '42px',
    color: '#707070',
    fontSize: '12px',
    border: '1px solid #707070',
  });

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      '&:not(:first-of-type)': {
        borderRadius: '10px',
        margin: '0px',
        borderLeft: '1px solid #707070',
      },
      '&:first-of-type': {
        borderRadius: '10px',
      },
      '&.Mui-selected': {
        border: '1px solid #0027FD',
        backgroundColor: '#fff',
        color: '#0027FD',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
    },
  }));
  return (
    <Box sx={{ marginBottom: '44px' }} component="div">
      <StyledLabel htmlFor="game">선호게임</StyledLabel>
      <StyledToggleButtonGroup
        onChange={handleGameChange}
        value={game}
        exclusive
        fullWidth
        sx={{ display: 'flex', gap: '11px' }}
      >
        <StyledToggleButton value="매칭">매칭</StyledToggleButton>
        <StyledToggleButton value="랠리">랠리</StyledToggleButton>
      </StyledToggleButtonGroup>
    </Box>
  );
};

export default Game;
