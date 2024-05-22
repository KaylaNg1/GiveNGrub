import React, { useRef } from 'react';
import Receipts from './pages/Receipt'
import Home from './pages/Home'
import { Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="receipt" element={<Receipts />}/>
      </Routes>
    </div>
  );
}

export default App;
