import React, { useState } from 'react'

import { Link } from 'react-router-dom'

// common Components
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

export default function SignUp() {

    const [inputData, setInputData] = useState({
        fName: '',
        lName: '',
        email: '',
        phone: '',
        password: '',
        skill: '',
    });

    const handleInput = (formEvent) => {
        // const name = { [formEvent.target.name]: formEvent.target.value };
        const name = formEvent.target.name;
        const value = formEvent.target.value;
        // console.log(name, value);
        setInputData({ ...inputData, [name]: value })
    }

    const handleFormSubmit = (submitEvent) => {
        submitEvent.preventDefault();
        console.log(inputData)
    }

    return (
        <>
            <Header />
            <section id="LoginPageContainer">
                <div className="mainContainer">
                    <div className="registerContainer">
                        <h2>Register</h2>
                        <p>Already have an account? <a href="./login.html">Log In</a></p>

                        <form className="row g-3 text-left" method="">
                            <div className="col-md-6">
                                <label className="form-label" htmlFor="fName">Name <span className="mandatry">*</span></label>
                                <input type="text" className="form-control" name="fName" id="fName" value={inputData.fName} onChange={handleInput} required />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label" htmlFor="lName">Last Name <span className="mandatry">*</span></label>
                                <input type="text" name="lName" className="form-control" value={inputData.lName} onChange={handleInput} required />
                            </div>

                            <div className="col-12">
                                <label className="form-label">Email <span className="mandatry">*</span></label>
                                <input type="email" className="form-control" name='email' value={inputData.email} onChange={handleInput} required />
                            </div>

                            <div className="col-md-12">
                                <label className="form-label">Mobile No. <span className="mandatry">*</span></label>
                                <div className="phoneContainer">
                                    <input type="text" className="phone_no form-control" name="phone" value={inputData.phone} onChange={handleInput} required />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <label className="form-label">Password <span className="mandatry">*</span></label>
                                <input id="password-field" type="password" className="form-control" name="password" value={inputData.password} onChange={handleInput} required />
                            </div>

                            <div className="col-md-12">
                                <label for="inputState" className="form-label">Your Skill <span className="mandatry">*</span></label>
                                <select className="form-select" name="skill" value={inputData.skill} onChange={handleInput} required >
                                    <option selected>Chose Your Skill</option>
                                    <option>Dancer</option>
                                    <option>Writer</option>
                                    <option>Singer</option>
                                    <option>Designer</option>
                                </select>
                            </div>

                            {/* <div className="col-md-12">
                                <label for="inputState" className="form-label">Country</label>
                                <select className="form-select" value={inputData} required>
                                    <option selected>Chose Your Country</option>
                                    <option>India</option>
                                    <option>USA</option>
                                </select>
                            </div> */}

                            {/* <div className="col-md-6">
                                <label for="inputState" className="form-label">Select State</label>
                                <select className="form-select" value={inputData} required>
                                    <option selected>Chose Your State</option>
                                    <option>Rajasthan</option>
                                    <option>Punjab</option>
                                    <option>Chennai</option>
                                    <option>kerala</option>
                                </select>
                            </div> */}

                            {/* <div className="col-md-6">
                                <label for="inputState" className="form-label">Select City</label>
                                <select className="form-select" value={inputData} required>
                                    <option selected>Chose Your City</option>
                                    <option>Jaipur</option>
                                    <option>Ajmer</option>
                                </select>
                            </div> */}

                            {/* <div className="col-md-6">
                                <label className="form-label">Confirm Password</label>
                                <input id="password-field2" type="password" className="form-control" name="password" value={inputData} required />
                                <span toggle="#password-field2" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                            </div> */}

                            {/* <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" required />
                                    <label className="form-check-label" for="gridCheck">
                                        I agree to <a href="/">Terms & Conditions</a> and <a href="/">Privacy Policy</a>
                                    </label>
                                </div>
                            </div> */}
                            <div className="col-12">
                                <button type="submit" className="themeButton border-0" onClick={handleFormSubmit}>
                                    Create Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
