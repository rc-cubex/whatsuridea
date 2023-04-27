import React from 'react'
import CategoryTile from './CategoryTile'

// Images
import category_1 from '../../assets/images/category_1.png'
import category_2 from '../../assets/images/category_2.png'
import category_3 from '../../assets/images/category_3.png'
import category_4 from '../../assets/images/category_4.png'
import category_5 from '../../assets/images/category_5.png'
import category_6 from '../../assets/images/category_6.png'
import category_7 from '../../assets/images/category_7.png'
import category_8 from '../../assets/images/category_8.png'
import category_9 from '../../assets/images/category_9.png'
import category_10 from '../../assets/images/category_10.png'
import category_11 from '../../assets/images/category_11.png'
import category_12 from '../../assets/images/category_12.png'
import category_13 from '../../assets/images/category_13.png'
import category_14 from '../../assets/images/category_14.png'
import category_15 from '../../assets/images/category_15.png'

export default function Categories() {

    const categoryData = [
        { id: "1", categoryIcon: category_1, categoryTitle: "Acting/Modeling" },
        { id: "2", categoryIcon: category_2, categoryTitle: "Advertising/Marketing" },
        { id: "3", categoryIcon: category_3, categoryTitle: "Band Instruments" },
        { id: "4", categoryIcon: category_4, categoryTitle: "Beauty & Fashion" },
        { id: "5", categoryIcon: category_5, categoryTitle: "Camera/Cinematography" },
        { id: "6", categoryIcon: category_6, categoryTitle: "Dancing/Choreography" },
        { id: "7", categoryIcon: category_7, categoryTitle: "Creative Ideas & Concepts" },
        { id: "8", categoryIcon: category_8, categoryTitle: "Creative Writing Slogans & Taglines" },
        { id: "9", categoryIcon: category_9, categoryTitle: "Designing/Graphics" },
        { id: "10", categoryIcon: category_10, categoryTitle: "Film Making /Direction" },
        { id: "11", categoryIcon: category_11, categoryTitle: "Music Composition" },
        { id: "12", categoryIcon: category_12, categoryTitle: "Photography" },
        { id: "13", categoryIcon: category_13, categoryTitle: "Script Writing" },
        { id: "14", categoryIcon: category_14, categoryTitle: "Short Films" },
        { id: "15", categoryIcon: category_15, categoryTitle: "Singing/Dubbing" }
    ]

    const mainCategories = (value) => {
        return (
            <CategoryTile
                key={value.id}
                categoryIcon={value.categoryIcon}
                categoryTitle={value.categoryTitle}
            />
        )
    }

    return (
        <section id="categories">
            <h2 className="sectionHeading">All Categories</h2>
            <div className="d-flex flex-wrap">
                {categoryData.map(mainCategories)}
            </div>
        </section>
    )
}
