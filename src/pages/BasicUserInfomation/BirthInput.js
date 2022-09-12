import React, {useState} from 'react';
import {Box, Button, Input, InputLabel, styled, Typography} from "@mui/material";

import DatePicker from 'react-datepicker';


import ko from 'date-fns/locale/ko';



const BirthInput = () => {

    const [birthday, setBirthDay] = useState(new Date());


    const onChange = (dates) => {
        setBirthDay(dates)

    };
    return (
        <Box>
            <form>
                <StyledInputLabel htmlFor="nickname">생년월일을 알려주세요!</StyledInputLabel>
                <StyledDatePicker
                    locale={ko}
                    dateFormat="yyyy년 MM월 dd일"
                    selected={birthday}
                    onChange={onChange}
                />
                <Text></Text>
                <StyledButton fullWidth>다음으로 (3/4)</StyledButton>
            </form>
        </Box>
    );
};

export default BirthInput;

const StyledInputLabel = styled(InputLabel)`
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 6px;
  color: #707070;
`;

const StyledInput = styled(Input)`
  font-size: 24px;
  line-heigth: 1.5;
  font-weight: 700;
  color: #dbdbdb;
`;

const StyledDatePicker = styled(DatePicker)({
    width: '100%',
    fontSize: '28px',
    border: 'none',
    color: '#434343',
});

const Text = styled(Typography)`
  font-size: 10px;
  line-height: 1.5;
  color: #666666;
  margin-bottom: 501px;
`;

const StyledButton = styled(Button)`
  font-size: 14px;
  line-height: 1.5;
  color: #fff;
  background-color: #858a8f;
  border-radius: 10px;
  padding: 15px 0;
  &:hover {
    background-color: #343a40;
  }
`;
