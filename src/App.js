import React from 'react';
import {
    BrowserRouter, Routes, Route,
} from 'react-router-dom';

import LoginPage from './pages/loginpage/loginpage';
import UsersPage from './pages/userspage/userspage';
import DetailPage from './pages/detailpage/detailpage';
import NotFoundPage from './pages/notfound/notfoundpage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={LoginPage()} />
                <Route path="/users" element={UsersPage()} />
                <Route path="/users/:userid" element={<DetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
