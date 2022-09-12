import React from 'react';
import { Box, Button, Input, InputLabel, styled, Typography } from '@mui/material';

import Header from '../../components/common/Header';
import NicknameInput from './NicknameInput';
import SexInput from './SexInput';

const BasicUserInformation = () => {
  return (
    <Container>
      <Header title="기본정보" />
      <Box>
        {/* <NicknameInput /> */}
        <SexInput />
      </Box>
    </Container>
  );
};

export default BasicUserInformation;

const Container = styled(Box)`
  padding: 104px 20px 0;
  position: relative;
`;
