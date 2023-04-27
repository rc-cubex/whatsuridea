import React from 'react'
import { Link } from 'react-router-dom'

export default function SubCategories(props) {
    return (
        <li><Link href="/Contest">{props.subcategory} ({props.categoryCount})</Link></li>
    )
}
