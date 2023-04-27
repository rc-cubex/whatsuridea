import React from 'react'

import { Link } from 'react-router-dom'

export default function ContestCategoryTile(props) {
    return (
        <li>
            <Link to="./ContestDetail">
                <img src={props.tileIcon} alt="icon" class="img-fluid" />
                <p>{props.tileTitle}</p>
            </Link>
        </li>
    )
}
