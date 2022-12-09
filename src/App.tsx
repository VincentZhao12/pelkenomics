import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Providers from './components/Providers';
import Home from './pages/Home';
import './App.css';
import Classical from './pages/Classical';
import Keynsian from './pages/Keynsian';

const App: FC = () => {
    return (
        <div className="App">
            <Providers>
                <BrowserRouter basename="pelkenomics">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/classical" element={<Classical />} />
                        <Route path="/keynsian" element={<Keynsian />} />
                    </Routes>
                </BrowserRouter>
            </Providers>
        </div>
    );
};

export default App;
function createHistory(arg0: { basename: string | undefined }) {
    throw new Error('Function not implemented.');
}
