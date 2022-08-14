import React, { useState } from 'react';

import { Box, Button, Input, InputLabel, styled, TextField } from '@mui/material';

import API from '../../api/apiCall';
import Year from './Year';
import Level from './Level';
import Age from './Age';
import Sex from './Sex';
import Game from './Game';
import NumberOfPeople from './NumberOfPeople';
import Cost from './Cost';
import Comment from './Comment';
import Header from '../../components/common/Header';
import SubmitButton from '../../components/common/SubmitButton';
import MatchingDate from './MatchingDate';

const Matching = () => {
  const [matchingData, setMatchingData] = useState({
    courtId: '2dcc2c55-2d15-4c1a-a940-cc9c75a96155',
    date: new Date(),
    startTime: '18:34:50.994784',
    endTime: '22:34:50.994803',
    annual: 2,
    minimumLevel: 1,
    maximumLevel: 2.5,
    ageOfRecruitment: 0,
    sexOfRecruitment: '',
    preferenceGame: '',
    numberOfNumber: '',
    costOfCourtPerPerson: 0,
    details: '',
    hostId: '145b8a89-b20b-4b30-bee3-38f092d9bec6',
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

  const saveMatchingData = async () => {
    console.log('matchingData', matchingData);
    try {
      const response = await API.post('http://3.143.143.122:8080/v1/api/matchings', matchingData);

      console.log('응답data', response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ height: '100vh', overflow: 'scroll' }}>
      <Header color="#000" bgColor="#fff" title="매칭만들기" />
      <Box sx={{ padding: '104px 20px 0' }} component="form" noValidate autoComplete="off">
        <Box sx={{ marginBottom: '51px' }} component="div">
          <StyledLabel htmlFor="court">코트장 선택</StyledLabel>
          <StyledInput fullWidth disableUnderline={true} id="court" />
        </Box>
        <Box sx={{ marginBottom: '51px' }} component="div">
          <StyledLabel htmlFor="date">일시</StyledLabel>
          <MatchingDate matchingData={matchingData} setMatchingData={setMatchingData} />
        </Box>
        <Box sx={{ marginBottom: '51px' }} component="div">
          <StyledLabel htmlFor="date">시간</StyledLabel>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <TimeInput type="time" name="startTime" onChange={onChangeHandler} />
            <TimeInput type="time" name="endTime" onChange={onChangeHandler} />
          </Box>
        </Box>
        <Year onChangeHandler={onChangeHandler} annual={annual} />
        <Level matchingData={matchingData} setMatchingData={setMatchingData} />
        <Age onChangeHandler={onChangeHandler} ageOfRecruitment={ageOfRecruitment} />
        <Sex onChangeHandler={onChangeHandler} sexOfRecruitment={sexOfRecruitment} />
        <Game onChangeHandler={onChangeHandler} preferenceGame={preferenceGame} />
        <NumberOfPeople onChangeHandler={onChangeHandler} numberOfNumber={numberOfNumber} />
        <Cost matchingData={matchingData} setMatchingData={setMatchingData} />
        <Comment onChangeHandler={onChangeHandler} details={details} />
        <SubmitButton title="매칭 만들기 완료" bgcolor="#0027FD" onClickHandler={saveMatchingData} />
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

const TimeInput = styled(TextField)`
  width: 48%;
`;
