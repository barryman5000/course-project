import React, { Component } from "react";
import Logo from './logo.png';
import './App.css';
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import styled from 'styled-components';
import Home from "../Home/Home";
import Casual from "../Casual/Casual";
import Sports from "../Sports/Sports";
import Footer from "../Footer/Footer";

const MyNavLink = styled(NavLink)`
text-decoration: none;
&:hover{
    text-decoration: underline;
}
`

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="top-menu">
                    <ul className="header">
                        <li><NavLink to="/"><img class="App-logo" alt="Sports Apparel" src={Logo} /></NavLink></li> | 
                        <li><MyNavLink to="/casual">Casual Wear</MyNavLink></li> |
                        <li><MyNavLink to="/sports">Sports Wear</MyNavLink></li>
                    </ul>
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/casual" element={<Casual />}/>
                        <Route path="/sports" element={<Sports />}/>
                    </Routes>
                </div>
                <Footer />
            </HashRouter>
        )
    }
}

export default App;