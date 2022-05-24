import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header/Header';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path = "/add" element = {<AddEdit />}/>
          <Route path = "/update/:id" element = {<AddEdit />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
