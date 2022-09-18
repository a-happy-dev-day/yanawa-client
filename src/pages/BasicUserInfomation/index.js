import React, {useState} from 'react';
import {Box, Button, Input, InputLabel, styled, Typography} from '@mui/material';

import Header from '../../components/common/Header';
import NicknameInput from './NicknameInput';
import SexInput from './SexInput';
import BirthInput from "./BirthInput";
import YearInput from "./YearInput";

const BasicUserInformation = () => {
    const [userInfoPage, setUserInfoPage] = useState(1);

    const [userInfoData, setUserInfoData] = useState({
        nickname: '',
        sex: 'male',
        birth: '',
        year: ''
    })

    console.log(userInfoData)
    return (
        <Container>
            <Header title="기본정보"/>
            <Box>
                {userInfoPage === 1 && <NicknameInput userInfoData={userInfoData} setUserInfoData={setUserInfoData} setUserInfoPage={setUserInfoPage} />}
                {userInfoPage === 2 && <SexInput userInfoData={userInfoData} setUserInfoData={setUserInfoData} setUserInfoPage={setUserInfoPage} />}
                {userInfoPage === 3 && <BirthInput userInfoData={userInfoData} setUserInfoData={setUserInfoData} setUserInfoPage={setUserInfoPage} />}
                {userInfoPage === 4 && <YearInput userInfoData={userInfoData} setUserInfoData={setUserInfoData} />}
            </Box>
        </Container>
    );
};

export default BasicUserInformation;

const Container = styled(Box)`
  padding: 104px 20px 0;
  position: relative;
`;
