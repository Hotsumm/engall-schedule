import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import AddSchedule from './pages/AddSchedule';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addSchedule" element={<AddSchedule />} />
    </Routes>
  );
};

export default Router;
