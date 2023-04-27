import React from 'react'

import { Link } from 'react-router-dom'

export default function CategoryTile(props) {
    return (
        <div className="categoryTileMain">
            <Link to="/Contest" className="categoryTile">
                <img src={props.categoryIcon} alt="icon" className="img-fluid" />
                <p>{props.categoryTitle}</p>
            </Link>
        </div>
    )
}
