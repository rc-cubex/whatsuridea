import React from 'react'

import { Link } from 'react-router-dom';

// Images
import logo from '../assets/images/logo.png'
import contest_1 from '../assets/images/contest_1.png'
// Icons
import { BsBriefcase } from "react-icons/bs";
import { BsChatRightDots } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineHistory } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
// import { useState } from 'react';
// import { useEffect } from 'react';



export default function Header() {

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

    const isLogin = () => { }

    return (
        <header id="header">
            <div className='container-fluid'>
                <div className='row  align-items-center'>
                    <div className='col-md'>
                        <div className='leftPart d-flex align-items-center'>

                            <Link to='/Contest' className='contestMenu'><BsBriefcase /> <span>Contests</span></Link>

                            <div className='searchBar'>
                                <input type='text' placeholder='Search...' className='border-0 form-control' />
                                <CiSearch />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <Link to='/' target='_top' className="appLogo text-center">
                            <img src={logo} alt="logo" className='img-fluid' />
                        </Link>
                    </div>

                    <div className='col-md'>

                        {isLogin === false ? (
                            <ul className='rightPart list-unstyled mb-0 d-flex align-items-center justify-content-end'>
                                <li>
                                    <Link to="/Login" target='_top' className='d-flex align-items-center themeButton'>
                                        <FiLogIn /> Login
                                    </Link>
                                </li>
                            </ul>

                        ) : (

                            <ul className='rightPart list-unstyled mb-0 d-flex align-items-center justify-content-end'>
                                <li>
                                    <a href="/" className='d-flex align-items-center'>
                                        <div className="position-relative">
                                            <BsChatRightDots />
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                                                99+
                                            </span>
                                        </div>
                                        <span>Chat</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className='d-flex align-items-center'>
                                        <div className="position-relative">
                                            <BsBell />
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                                                99+
                                            </span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <div className="dropdown">
                                        <a className="dropdown-toggle d-flex align-items-center" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className='profileContainer me-2'><img src={contest_1} /></span>
                                            <span>John Deo</span>
                                        </a>
                                        <ul className="dropdown-menu list-unstyled mb-0 dropdown-menu-start">
                                            <li><a className="dropdown-item" href="/"><RiUser3Line /> My Profile</a></li>
                                            <li><a className="dropdown-item" href="/"><BsBriefcase />  My Contest</a></li>
                                            <li><a className="dropdown-item" href="/"><AiOutlineHistory /> Payment History</a></li>
                                            <li><a className="dropdown-item" href="/"><MdLogout /> Logout</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li>
                                    <a href="/" className='d-flex align-items-center themeButton'>
                                        <BsPlusLg /> Host Contest
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

