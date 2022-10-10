import React from 'react';
import {
  Box,
  styled,
  Typography,
  InputLabel,
  BottomNavigation,
  BottomNavigationAction,
  Fab,
  Stack,
  Pagination,
  FormControl,
  Select,
  MenuItem,
  ListSubheader,
} from '@mui/material';

import MatchingList from './matchingList';
import place1 from '../../assets/images/wish/place1.png';
import profile from '../../assets/images/profile.png';
import HeaderHome from '../../components/common/HeaderHome';

import AddIcon from '@mui/icons-material/Add';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const StyledFab = styled(Fab)({
  // position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

const Home = () => {
  const listData = [
    {
      id: 0,
      placeImg: place1,
      state: '매칭',
      title: '보라매공원테니스장',
      date: '2022.04.09(토)・18-20시',
      wish: 'Y',
      profile: [
        {
          id: 0,
          profileImg: profile,
          host: 'Y',
          name: 'host1',
        },
        {
          id: 1,
          profileImg: profile,
          host: 'N',
          name: 'user1',
        },
      ],
    },
    {
      id: 1,
      placeImg: place1,
      state: '매칭',
      title: '보라매공원테니스장',
      date: '2022.04.09(토)・18-20시',
      wish: 'Y',
      profile: [
        {
          id: 0,
          host: 'Y',
          profileImg: profile,
          name: 'host1',
        },
        {
          id: 1,
          host: 'N',
          profileImg: 'N',
          name: 'user1',
        },
      ],
    },
    {
      id: 2,
      placeImg: place1,
      state: '매칭',
      title: '보라매공원테니스장',
      date: '2022.04.09(토)・18-20시',
      wish: 'Y',
      profile: [
        {
          id: 0,
          host: 'Y',
          profileImg: profile,
          name: 'host1',
        },
        {
          id: 1,
          host: 'N',
          profileImg: 'N',
          name: 'user1',
        },
      ],
    },
  ];

  const [value, setValue] = React.useState('recents');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ height: '100vh', position: 'relative', overflow: 'scroll' }}>
      <HeaderHome />
      <StyledBgImg />
      <Box sx={{ padding: '0 20px', marginTop: '-150px', marginBottom: '30px', backgroundColor: '#f9f9f9' }}>
        <Box
          sx={{
            '& > legend': { mt: 2 },
            aligenItems: 'center',
            backgroundColor: '#f9f9f9',
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
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px 20px 15px 16px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <div>
          <FormControl sx={{ m: 2, minWidth: 110 }}>
            <InputLabel htmlFor="grouped-native-select">모든 지역</InputLabel>
            <Select native defaultValue="" id="grouped-native-select" label="지역">
              <optgroup label="지역 선택">
                <option value={1}>모든 지역</option>
                <option value={2}>서울</option>
                <option value={3}>경기</option>
              </optgroup>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 2, minWidth: 110 }}>
            <InputLabel htmlFor="grouped-native-select">구력</InputLabel>
            <Select native defaultValue="" id="grouped-native-select" label="구력">
              <optgroup label="구력 선택">
                <option value={1}>1년 미만</option>
                <option value={2}>2년 미만</option>
                <option value={3}>3년 이상</option>
              </optgroup>
            </Select>
          </FormControl>
        </div>
      </Box>

      <Container>
        <MatchingList listData={listData} />
      </Container>

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

const Container = styled(Box)`
  position: relative;
  height: 50vh;
  background: #f9f9f9;
  overflow: scroll;
  padding: 80px 20px 0;
`;
