import React from 'react'

import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footerData">
                    <div className="company">
                        <h4>Company</h4>
                        <ul className='list-unstyled mb-0'>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Contests</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Testimonials</a></li>
                            <li><a href="/">How It Works</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="category">
                        <h4>Categories</h4>
                        <ul className='list-unstyled mb-0'>
                            <li><a href="/">Acting/Modeling</a></li>
                            <li><a href="/">Advertising/Marketing</a></li>
                            <li><a href="/">Brand & Instruments</a></li>
                            <li><a href="/">Beauty & Fashion</a></li>
                            <li><a href="/">Camera/Cinematography</a></li>
                            <li><a href="/">Creative Ideas & Concepts</a></li>
                            <li><a href="/">Creative Writing, Slogans & Taglines</a></li>
                            <li><a href="/">Dancing/Choreography</a></li>
                            <li><a href="/">Designing/Graphics</a></li>
                            <li><a href="/">Film Making/Direction</a></li>
                            <li><a href="/">Music Composition</a></li>
                            <li><a href="/">Photography</a></li>
                            <li><a href="/">Script Writing</a></li>
                            <li><a href="/">Short Films</a></li>
                            <li><a href="/">Singing/Dubbing</a></li>
                        </ul>
                    </div>
                    <div className="terms">
                        <h4>Terms</h4>
                        <ul className='list-unstyled mb-0'>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Terms & Conditions</a></li>
                            <li><a href="/">Copyright Policy</a></li>
                            <li><a href="/">Fees to Charges</a></li>
                            <li><a href="/">Refund Policy</a></li>
                        </ul>
                    </div>
                    <div className="resources">
                        <h4>Resources</h4>
                        <ul className='list-unstyled mb-0'>
                            <li><a href="/">Blogs</a></li>
                            <li><a href="/">News</a></li>
                            <li><a href="/">FAQ</a></li>
                            <li><a href="/">Help</a></li>
                            <li><a href="/">Sponsorship</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footSocial">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <ul className="list-unstyled mb-0 d-flex align-items-center">
                                <li>Social Media</li>
                                <li>
                                    <a href="/"><FaFacebookF /></a>
                                </li>
                                <li>
                                    <a href="/"><FaTwitter /></a>
                                </li>
                                <li>
                                    <a href="/"><FaYoutube /></a>
                                </li>
                                <li>
                                    <a href="/"><FaInstagram /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <p className='mb-0'>Whatsuridea &reg; is a Registered Tradevalue of Kokoroko Media Pvt. Ltd.</p>
                        </div>
                    </div>
                </div>

                <p className="py-3 text-center text-light">Copyright &copy; 2023 Kokoroko Media Pvt. Ltd.</p>
            </div>
        </footer>
    )
}
