import './App.css';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Register from './pages/Register';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <div
        className="border border-solid border-black bg-white w-[375px] h-[812px]"
        style={{ fontFamily: 'ABeeZee', fontWeight: '700' }}
      >
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
