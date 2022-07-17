import { Box, InputLabel, styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';

const Age = ({ ageOfRecruitment, onChangeHandler }) => {
  return (
    <Box sx={{ marginBottom: '44px' }} component="div">
      <StyledLabel htmlFor="age">모집연령</StyledLabel>
      <StyledToggleButtonGroup
        onChange={onChangeHandler}
        value={ageOfRecruitment}
        name="ageOfRecruitment"
        exclusive
        fullWidth
        sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}
      >
        <StyledToggleButton name="ageOfRecruitment" value="20대">
          20대
        </StyledToggleButton>
        <StyledToggleButton name="ageOfRecruitment" value="30대">
          30대
        </StyledToggleButton>
        <StyledToggleButton name="ageOfRecruitment" value="40대">
          40대
        </StyledToggleButton>
        <StyledToggleButton name="ageOfRecruitment" value="50대 이상">
          50대 이상
        </StyledToggleButton>
        <StyledToggleButton name="ageOfRecruitment" value="무관">
          무관
        </StyledToggleButton>
      </StyledToggleButtonGroup>
    </Box>
  );
};

export default Age;

const StyledLabel = styled(InputLabel)`
  font-size: 12px;
  color: #707070;
  margin-bottom: 11px;
`;
const StyledToggleButton = styled(ToggleButton)({
  width: '105px',
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
