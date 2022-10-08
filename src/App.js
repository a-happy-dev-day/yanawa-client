import './App.css';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Matching from './pages/matching';
import MatchingResult from './pages/matchingResult';
import MatchingDetails from './pages/matchingDetails';
import Review from './pages/review';
import ReviewDetails from './pages/reviewDetails';
import MyInfo from './pages/myInfo';
import Setting from './pages/setting';
import Splash from './pages/Splash';
import Login from './pages/Login';
import BasicUserInformation from './pages/BasicUserInfomation';
import Notice from "./pages/Notice";
import Wish from "./pages/Wish";


function App() {

  return (
    <div style={{ backgroundColor: '#E8E8E8' }}>
      <CssBaseline />
      <Container
        component="main"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        maxWidth={false}
      >
        <Box sx={{ bgcolor: '#FFFFFF', width: '375px', height: '100vh' }}>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userInfo" element={<BasicUserInformation />} />
            <Route path="/matching" element={<Matching />} />
            <Route path="/matchingResult" element={<MatchingResult />} />
            <Route path="/matchingDetails" element={<MatchingDetails />} />
            <Route path="/myInfo" element={<MyInfo />} />
            <Route path="/review" element={<Review />} />
            <Route path="/reviewDetails" element={<ReviewDetails />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/wish" element={<Wish />} />
          </Routes>
        </Box>
      </Container>
    </div>
  );
}

export default App;
