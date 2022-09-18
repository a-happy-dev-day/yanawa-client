import React, { useState } from 'react';
import { Box, styled, Typography, InputLabel, TextareaAutosize, Button } from '@mui/material';

import Header from '../../components/common/Header';

import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

// import SentimentVeryDissatisfiedIcon from '../../assets/images/bad.png';
// import SentimentDissatisfiedIcon from '../../assets/images/good.png';
// import SentimentVerySatisfiedIcon from '../../assets/images/excellent.png';

import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';

import SubmitButton from '../../components/common/SubmitButton';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const labels = {
  1: '1',
  2: '1.5',
  3: '2',
  4: '2.5',
  5: '3',
  6: '3.5',
  7: '4',
  8: '4.5',
  9: '5 이상',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="warning" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

const ReviewDetails = ({ details, onChangeHandler }) => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <div style={{ height: '100vh', position: 'relative', backgroundColor: '#f9f9f9', overflow: 'scroll' }}>
      <Header color="#292929" title="스매싱 님에 대한 평가 및 후기" />
      <StyledBgImg />
      <Box sx={{ padding: '0 20px', marginTop: '-150px', marginBottom: '30px' }}>
        <Box
          sx={{
            '& > legend': { mt: 2 },
            aligenItems: 'center',
            backgroundColor: '#fff',
            marginBottom: '9px',
            padding: '15px 20px 15px 16px',
          }}
        >
          <Typography
            component="legend"
            sx={{
              marginLeft: '2px',
              fontSize: '12px',
              fontWeight: '600',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            내가 평가하는 상대 실력 "NTPR기준"
          </Typography>
          <Rating
            sx={{ ml: 5 }}
            name="customized-10"
            defaultValue={1}
            max={9}
            value={value}
            precision={1}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          {value !== null && (
            <Box sx={{ ml: 16, fontSize: '12px', fontWeight: '600' }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 20px 15px 16px',
            backgroundColor: '#fff',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              sx={{
                marginLeft: '5px',
                fontSize: '12px',
                fontWeight: '500',
                alignItems: 'center',
              }}
            >
              매너 온도를 선택해 주세요
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            aligenItems: 'center',
            fontSize: '12px',
            marginBottom: '9px',
          }}
        >
          <Stack spacing={2}>
            <StyledRating
              name="highlight-selected-only"
              defaultValue={3}
              IconContainerComponent={IconContainerR}
              getLabelText={(value) => customIcons[value].label}
              highlightSelectedOnly
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#fff',
                aligenItems: 'center',
                margin: '10px 10px 50px 100px',
              }}
            />
          </Stack>
        </Box>

        <Box sx={{ marginBottom: '51px' }} component="div">
          <StyledLabel htmlFor="comment">그 외 후기를 남겨주세요</StyledLabel>
          <StyledTextarea
            id="comment"
            placeholder="매칭했던 상대에게 하고 싶은 말을 남겨주세요."
            style={{ height: '125px' }}
            name="details"
            onChange={onChangeHandler}
            value={details}
          />
        </Box>
        <StyledLabel
          htmlFor="comment"
          sx={{
            marginLeft: '40px',
            fontSize: '12px',
            fontWeight: '300',
            alignItems: 'center',
          }}
        >
          남겨주신 후기는 나중에 상대방의 프로필에 반영돼요.
        </StyledLabel>
        <SubmitButton title="작성 완료" bgcolor="#0027FD" />
      </Box>
    </div>
  );
};

export default ReviewDetails;

const StyledBgImg = styled(Box)({
  height: '210px',
});

const IconContainer = styled(Box)({
  display: 'flex',
  position: 'absolute',
  right: '18px',
  top: '17px',
});

function IconContainerR(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainerR.propTypes = {
  value: PropTypes.number.isRequired,
};

const StyledRatingS = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const StyledLabel = styled(InputLabel)`
  font-size: 12px;
  color: #707070;
  margin-bottom: 11px;
`;

const StyledTextarea = styled(TextareaAutosize)`
  width: 100%;
  height: 125px;
  padding: 10px;
  font-size: 12px;
`;
