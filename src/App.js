import React from 'react';
import { ReactFlow } from '@xyflow/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import PageWrapper from './components/PageWrapper';
import '@xyflow/react/dist/style.css';
import { AnimatePresence } from "framer-motion";
import Rerokai from "./pages/Rerokai"
import Project from "./pages/Project"




function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Rerokai/></PageWrapper>}/>
        <Route path="/project" element={<PageWrapper><Project/></PageWrapper>}/>
      </Routes>
    </AnimatePresence>
  );
}


function App() {
  return (
    
    <Router>
      <AnimatedRoutes />
    </Router>
    
  );
}

export default App;