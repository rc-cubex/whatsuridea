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

export default function SliderComponent() {
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
        <section id="slider">
            <div className='container'>
                <div className='row align-items-center'>
                    <div class="col-lg-6">
                        <h1>India's First Crowd-Sourcing <br /> Content Creation & Idea Sharing Platform
                            <p>For The Industry Media and Entertainment.</p>
                        </h1>
                        <p>
                            Game-Changing Ideas Can Come from Anyone, Anywhere, Anytime. That’s Why, At Whatsuridea, No Matter Who You Are, What’s Your Age, Where You Are From, Or What Your Background Is, Whether You Are Good At Writing, Music, Singing, ActingModeling, Photography
                            Or Designing, You Can Now Share Your Talent To The World And Get Name, Fame, Money & Recognition.
                        </p>

                        <p class="paraLarge"><span>Whatsuridea</span> Invites You to Showcase Your Talent. Because We Believe Creativity Is Nobody’s Property.</p>

                        <a href="#howItWorks" class="themeButton">Register Now</a>
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
