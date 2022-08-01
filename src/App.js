import './App.css';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Main from './pages/Main';
import Register from './pages/Register';
import Matching from './pages/matching';
import MatchingResult from './pages/matchingResult';
import MatchingDetails from './pages/matchingDetails';

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
            <Route path="/main" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/matching" element={<Matching />} />
            <Route path="/matchingResult" element={<MatchingResult />} />
            <Route path="/matchingDetails" element={<MatchingDetails />} />
          </Routes>
        </Box>
      </Container>
    </div>
  );
}

export default App;
