import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { Box, Button, Input, InputLabel, styled } from '@mui/material';

import Year from './Year';
import Level from './Level';
import Age from './Age';
import Sex from './Sex';
import Game from './Game';
import NumberOfPeople from './NumberOfPeople';
import Cost from './Cost';
import Comment from './Comment';
import Header from '../../components/common/Header';

const Matching = () => {
  const [matchingData, setMatchingData] = useState({
    annual: 2,
    minimumLevel: 1,
    maximumLevel: 2.5,
    ageOfRecruitment: 0,
    sexOfRecruitment: '',
    preferenceGame: '',
    numberOfNumber: 0,
    costOfCourtPerPerson: 0,
    details: '',
  });
  console.log(matchingData);

  const { annual, ageOfRecruitment, sexOfRecruitment, preferenceGame, numberOfNumber, details } = matchingData;

  const onChangeHandler = (e) => {
    let { value, name } = e.target;

    if (name == 'annual' || name == 'ageOfRecruitment') {
      value = Number(value);
    }

    setMatchingData({
      ...matchingData,
      [name]: value,
    });
  };

  return (
    <div style={{ height: '100vh', overflow: 'scroll' }}>
      <Header title="매칭만들기" />
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
