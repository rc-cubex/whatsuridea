import React, { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Contest from '../pages/Contest';
import ContestDetail from '../pages/ContestDetail';
import Error from '../pages/Error';

export default function Navigation() {
    // const [isLogin, setIsLogin] = useState(false)
    // useEffect(() => {
    //     const isLoggedIn = async () => {
    //         const userInfo = sessionStorage.getItem('login');
    //         if (userInfo != null && userInfo != undefined) {
    //             console.log('test')
    //             setIsLogin(true)
    //         } else {
    //             setIsLogin(false)
    //             console.log('test2')
    //         }
    //     }
    //     isLoggedIn();
    // }, [])
    return (
        <Routes>
            {/* {isLogin ? <Route path="/" element={<Home />} /> : <Route path="/Login" element={<Login />} />} */}
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Contest" element={<Contest />} />
            <Route path="/ContestDetail" element={<ContestDetail />} />
            <Route element={<Error />} />
        </Routes>
    )
}


