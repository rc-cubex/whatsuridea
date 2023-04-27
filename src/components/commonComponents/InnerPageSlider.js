import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.css';

// Carousel Images
import slider_img_1 from '../../assets/images/slider_img_1.png'
import slider_img_2 from '../../assets/images/slider_img_2.png'
import slider_img_3 from '../../assets/images/slider_img_3.png'
import slider_img_4 from '../../assets/images/slider_img_4.png'
import slider_img_5 from '../../assets/images/slider_img_5.png'
import slider_img_6 from '../../assets/images/slider_img_6.png'

// Router
import { Link } from 'react-router-dom';

export default function SliderComponent(props) {
    const options = {
        items: 1,
        nav: false,
        rewind: true,
        autoplay: true,
        animateOut: 'fadeOut',
        autoplayTimeout: 4000,
    };

    const item = {
        items: [
            <img src={slider_img_1} className='img-fluid' />,
            <img src={slider_img_2} className='img-fluid' />,
            <img src={slider_img_3} className='img-fluid' />,
            <img src={slider_img_4} className='img-fluid' />,
            <img src={slider_img_5} className='img-fluid' />,
            <img src={slider_img_6} className='img-fluid' />
        ]
    }

    return (
        // <section id="slider">
        //     <div className='container'>
        //         <div className='row align-items-center'>
        //             <div class="col-lg-6">
        //                 <h1>Contests</h1>

        //             </div>
        //             <div className='col-md-6'>
        //                 <OwlCarousel options={options}  >
        //                     {item.items}
        //                 </OwlCarousel>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section id="contestSlider">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-md-6">
                        <h2>Contests</h2>
                        <ul class="list-unstyled d-flex align-items-center">
                            <li><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li>Contests</li>
                        </ul>
                    </div>
                    <div className='col-md-6'>
                        <OwlCarousel options={options}  >
                            {item.items}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}
