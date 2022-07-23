import { Box, Button, Input, InputLabel, styled } from '@mui/material';
import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Year from '../components/matching/Year';
import Level from '../components/matching/Level';
import Age from '../components/matching/Age';
import Sex from '../components/matching/Sex';
import Game from '../components/matching/Game';
import NumberOfPeople from '../components/matching/NumberOfPeople';
import Cost from '../components/matching/Cost';
import Comment from '../components/matching/Comment';
import { useNavigate } from 'react-router';

const Matching = () => {
  const navigate = useNavigate();
  const [matchingData, setMatchingData] = useState({
    annual: '',
    minimumLevel: '',
    maximumLevel: '',
    ageOfRecruitment: '',
    sexOfRecruitment: '',
    preferenceGame: '',
    numberOfNumber: 0,
    costOfCourtPerPerson: 0,
    details: '',
  });
  console.log(matchingData);

  const { annual, ageOfRecruitment, sexOfRecruitment, preferenceGame, numberOfNumber, details } = matchingData;

  const onChangeHandler = (e) => {
    const { value, name } = e.target;

    setMatchingData({
      ...matchingData,
      [name]: value,
    });
  };

  return (
    <div style={{ height: '100vh', overflow: 'scroll' }}>
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
        매칭만들기
      </Box>
      <Box sx={{ padding: '104px 20px 0' }} component="form" noValidate autoComplete="off">
        <Box sx={{ marginBottom: '51px' }} component="div">
          <StyledLabel htmlFor="court">코트장 선택</StyledLabel>
          <StyledInput fullWidth disableUnderline={true} id="court" />
        </Box>
        <Box sx={{ marginBottom: '51px' }} component="div">
          <StyledLabel htmlFor="date">일시</StyledLabel>
          <StyledInput fullWidth disableUnderline={true} id="date" />
        </Box>
        <Year onChangeHandler={onChangeHandler} annual={annual} />
        <Level matchingData={matchingData} setMatchingData={setMatchingData} />
        <Age onChangeHandler={onChangeHandler} ageOfRecruitment={ageOfRecruitment} />
        <Sex onChangeHandler={onChangeHandler} sexOfRecruitment={sexOfRecruitment} />
        <Game onChangeHandler={onChangeHandler} preferenceGame={preferenceGame} />
        <NumberOfPeople onChangeHandler={onChangeHandler} numberOfNumber={numberOfNumber} />
        <Cost matchingData={matchingData} setMatchingData={setMatchingData} />
        <Comment onChangeHandler={onChangeHandler} details={details} />
        <StyledButton fullWidth variant="contained">
          매칭 만들기 완료
        </StyledButton>
      </Box>
    </div>
  );
};

export default Matching;

const StyledLabel = styled(InputLabel)`
  font-size: 12px;
  color: #707070;
  margin-bottom: 11px;
`;
const StyledInput = styled(Input)`
  font-size: 24px;
  color: #434343;
`;
const StyledButton = styled(Button)`
  height: 50px;
  margin-bottom: 50px;
  background-color: #0027fd;
  border-radius: 10px;
`;
