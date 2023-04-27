import React from 'react'

export default function HowItWorksTile(props) {
    return (
        <div class="employerTile">
            <a href="#">
                <img src={props.tileImage} alt="Register as host" class="img-fluid" />
                <p className='mb-0'>{props.tileTitle}</p>
            </a>
        </div>
    )
}
