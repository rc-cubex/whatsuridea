import React, { useState } from 'react'

// common Components
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

import { Link, useNavigation } from 'react-router-dom'


export default function Login() {
    // const navigation = useNavigation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleEmail = (event) => {
        setEmail(event.target.value)
        console.log("setEmail")
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const [allEntry, setAllEntry] = useState([])

    const submitForm = async (event) => {
        event.preventDefault();

        const newEntry = { email: email, password: password }
        await sessionStorage.setItem('login', JSON.stringify(newEntry));
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry)

        // navigation('/')
    }

    const allValues = (allValues) => {
        return (
            <tr>
                <td>{allValues.email}</td>
                <td>{allValues.password}</td>
            </tr>
        )
    }

    return (
        <>
            <Header />
            <section id='LoginPageContainer'>
                <div className="mainContainer">
                    <div className="registerContainer">
                        <h2>Login</h2>
                        <p>Don't have an account? <Link to="/SignUp" target='_top'>Register</Link></p>
                        <form
                            className="row g-3 text-left"
                            action=""
                            method="GET"
                            onSubmit={submitForm}
                        >
                            <div className="col-md-12">
                                <label className="form-label">Email ID</label>
                                <input type="email" className="form-control"
                                    value={email}
                                    onChange={handleEmail}
                                />
                            </div>
                            <div className="col-md-12">
                                <label className="form-label">Password</label>
                                <input id="password-field" type="password" className="form-control" name="password" value={password} onChange={handlePassword} />
                                <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                            </div>
                            {/* <div className="col-sm-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Remember me
                                    </label>
                                </div>
                            </div> */}
                            {/* <div className="col-sm-6 text-light">
                                <a href="/" className="d-block text-end">Forgot Password</a>
                            </div> */}

                            <div className="col-12">
                                {/* <Link to="/" type='submit'>Sign In</Link> */}
                                <button type="submit" className="themeButton border-0">Sign In</button>
                            </div>
                        </form>
                        <table className='table table-bordered'>
                            <tr>
                                <th>Email ID</th>
                                <th>Password</th>
                            </tr>
                            {allEntry.map(allValues)}
                        </table>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
