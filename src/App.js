import React from 'react';
import './App.css';
import styled from "styled-components";

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Header from './component/Header/Header.jsx';
import Home from './component/Pages/Home.js'
import Download from './component/Pages/Download.js'
import Server from './component/Pages/Server.js'
import Open from './component/Pages/Open.js'
import Price from './component/Pages/Price.js'
import Support from './component/Pages/Support.js'
import Contact from './component/Pages/Contact.js'
import Footer from './component/Footer/Footer.jsx';


const AppStyle = styled.div`
margin-top:-40px;
background: #141C24;
position: relative;
`

const App = () => {
  return (
    <div classname="App">
      <AppStyle>
        <Router>
          <Header />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/server" element={<Server />}/>
              <Route path="/download" element={<Download />}/>
              <Route path="/open" element={<Open />}/>
              <Route path="/price" element={<Price />}/>
              <Route path="/support" element={<Support />}/>
              <Route path="/contact" element={<Contact />}/>          
            </Routes>
          <Footer />
        </Router>
      </AppStyle>
    </div>
  );
}









export default App;

