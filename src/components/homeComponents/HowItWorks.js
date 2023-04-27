import React from 'react'

// Components
import HowItWorksTile from './HowItWorksTile'

import { Link } from 'react-router-dom';

// Icons
import emp_1 from '../../assets/images/emp_1.png'
import emp_2 from '../../assets/images/emp_2.png'
import emp_3 from '../../assets/images/emp_3.png'
import emp_4 from '../../assets/images/emp_4.png'
import creator_1 from '../../assets/images/creator_1.png'
import creator_2 from '../../assets/images/creator_2.png'
import creator_3 from '../../assets/images/creator_3.png'
import creator_4 from '../../assets/images/creator_4.png'



export default function HowItWorks() {

    const employeeTileData = [
        { id: "1", tileImage: emp_1, tileTitle: "Register as host" },
        { id: "2", tileImage: emp_2, tileTitle: "Post contests" },
        { id: "3", tileImage: emp_3, tileTitle: "Receive entries" },
        { id: "4", tileImage: emp_4, tileTitle: "Chose the best" },
    ]

    const creatorTileData = [
        { id: "1", tileImage: creator_1, tileTitle: "Register" },
        { id: "2", tileImage: creator_2, tileTitle: "Participate" },
        { id: "3", tileImage: creator_3, tileTitle: "Win Cash Prizes" },
        { id: "4", tileImage: creator_4, tileTitle: "GET HIRED & PAID" },
    ]

    const employerTiles = (val) => {
        return (
            <HowItWorksTile key={val.id} tileImage={val.tileImage} tileTitle={val.tileTitle} />
        )
    }

    const creatorTiles = (val) => {
        return (
            <HowItWorksTile key={val.id} tileImage={val.tileImage} tileTitle={val.tileTitle} />
        )
    }

    return (
        <section id="howItWorks">
            <div class="container">
                <h2 class="sectionHeading">How It Works</h2>
                <div class="containerRow">
                    <div class="tileLeft">
                        <h4>Employer</h4>
                        <div class="d-flex flex-wrap">
                            {employeeTileData.map(employerTiles)}
                        </div>
                        <ul class="list-unstyled d-flex align-items-center justify-content-center">
                            <li><Link to="/SignUp" target='_top' class="themeButton">Register</Link></li>
                            <li><Link to="/" class="themeButton video">Video</Link></li>
                        </ul>
                    </div>
                    <div class="tileRight">
                        <h4>Creator</h4>
                        <div class="d-flex flex-wrap">
                            {creatorTileData.map(creatorTiles)}
                        </div>
                        <ul class="list-unstyled d-flex align-items-center justify-content-center">
                            <li><Link to="/SignUp" target='_top' class="themeButton">Register</Link></li>
                            <li><Link to="/" class="themeButton video">Video</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
