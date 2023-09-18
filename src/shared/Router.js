import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import MyHome from '../pages/MyHome';
import LoginModal from '../redux/components/Modal/LoginModal';
import SignUpModal from '../redux/components/Modal/SignUpModal';
import WriteModal from '../redux/components/Modal/WriteModal';
import ViewModal from '../redux/components/Modal/ViewModal';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/:nickname" element={<MyHome></MyHome>}></Route>
                <Route
                    path="/modal"
                    element={<LoginModal></LoginModal>}
                ></Route>
                <Route
                    path="/SignUpModal"
                    element={<SignUpModal></SignUpModal>}
                ></Route>
                <Route
                    path="/WriteModal"
                    element={<WriteModal></WriteModal>}
                ></Route>
                <Route
                    path="/ViewModal"
                    element={<ViewModal></ViewModal>}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
