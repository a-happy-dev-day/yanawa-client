import React, { useState } from 'react';
import { Box, styled, Typography, InputLabel, TextareaAutosize, Button } from '@mui/material';

import Header from '../../components/common/Header';
import HeaderHome from '../../components/common/HeaderHome';

import homeImg from '../../assets/images/homeImg.png';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddIcon from '@mui/icons-material/Add';

import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';

import SubmitButton from '../../components/common/SubmitButton';

import Pagination from '@mui/material/Pagination';

import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const StyledFab = styled(Fab)({
  // position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

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

const Home = ({ details, onChangeHandler }) => {
  // const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ height: '100vh', position: 'relative', backgroundColor: '#f9f9f9', overflow: 'scroll' }}>
      {/* <Header color="#292929" title="스매싱 님에 대한 평가 및 후기" /> */}
      <HeaderHome />
      {/* <StyledHomeImg /> */}
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
            나와 맞는 매칭을 찾아보세요
          </Typography>

          <Stack spacing={2}>
            <Pagination count={5} color="primary" />
          </Stack>
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
          <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
              <Select native defaultValue="" id="grouped-native-select" label="모든 지역">
                <option aria-label="모든지역" value="" />
                <optgroup label="Category 1">
                  <option value={1}>Option 1</option>
                  <option value={2}>Option 2</option>
                </optgroup>
                <optgroup label="Category 2">
                  <option value={3}>Option 3</option>
                  <option value={4}>Option 4</option>
                </optgroup>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
              <Select defaultValue="" id="grouped-select" label="구력">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <ListSubheader>Category 1</ListSubheader>
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <ListSubheader>Category 2</ListSubheader>
                <MenuItem value={3}>Option 3</MenuItem>
                <MenuItem value={4}>Option 4</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="../../assets/images/court-2.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
        {/* <StyledLabel
          htmlFor="comment"
          sx={{
            marginLeft: '40px',
            fontSize: '12px',
            fontWeight: '300',
            alignItems: 'center',
          }}
        >
          남겨주신 후기는 나중에 상대방의 프로필에 반영돼요.
        </StyledLabel> */}
        {/* <SubmitButton title="작성 완료" bgcolor="#0027FD" /> */}
      </Box>

      <BottomNavigation sx={{ width: 375 }} value={value} onChange={handleChange}>
        <BottomNavigationAction label="홈" value="home" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction label="찜" value="favorites" icon={<FavoriteBorderIcon />} />
        <StyledFab color="primary" aria-label="add">
          <AddIcon />
        </StyledFab>
        <BottomNavigationAction label="알림" value="alarm" icon={<NotificationsNoneIcon />} />
        <BottomNavigationAction label="내 정보" value="account" icon={<AccountCircleOutlinedIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default Home;

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

const StyledHomeImg = styled(Box)({
  height: '210px',
  background: `url(${homeImg})`,
});
