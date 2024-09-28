// src/App.js
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <Home />
            <Destinations />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
