import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen';
import IntroScreen from './Pages/IntroScreen';
import AdminScreen from './Pages/AdminScreen';
import LoginScreen from './Pages/LoginScreen';
import Translation from './i18n/Translation';
import { GlobalStyles } from './Static/GlobalStyles.style';




const App = () => {


  return (
    <Translation>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Intro" element={<IntroScreen />} />
        <Route path="/Login" element={<LoginScreen />} />
        <Route path="/Admin" element={<AdminScreen />} />
      </Routes>
    </Translation>
  );
}

export default App