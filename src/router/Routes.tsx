import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainComponent from '../components/MainComponent';
import HomeComponent from '../components/HomeComponent';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainComponent />} />
      <Route path="/home" element={<HomeComponent />} />
    </Routes>
  );
};

export default RoutesComponent;
