import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './DemoComponent';
import ProfileCreationComponent from './secondpage';
import DribbleSignup from './thirdpage';
import VerifyEmail from './finalpage';
import { MyObjectProvider } from './context';

const App = () => {
  

  return (
    <MyObjectProvider>    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/secondPage" element={<ProfileCreationComponent />} />
        <Route path="/thirdPage" element={<DribbleSignup />} />
        <Route path="/finalPage" element={<VerifyEmail />} />
      </Routes>
    </Router>
    </MyObjectProvider>

  );
};

export default App;
