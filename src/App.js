import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen';
import IntroScreen from './Pages/IntroScreen';
import AdminScreen from './Pages/AdminScreen';
import LoginScreen from './Pages/LoginScreen';
import Translation from './i18n/Translation';
import NavWrapper from './Components/NavWrapper/NavWrapper';

const App = () => {
  return (
    <Translation>
      <NavWrapper>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Intro" element={<IntroScreen />} />
          <Route path="/Login" element={<LoginScreen />} />
          <Route path="/Admin" element={<AdminScreen />} />
        </Routes>
      </NavWrapper>
    </Translation>
  );
};

export default App;
