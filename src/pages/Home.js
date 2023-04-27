import React from 'react'

// Header
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
// Components
import Slider from '../components/homeComponents/SliderComponent'
import HowItWorks from '../components/homeComponents/HowItWorks'
import Contest from '../components/homeComponents/Contest'
import Categories from '../components/homeComponents/Categories'
import SubCategories from '../components/homeComponents/SubCategories'

export default function Home() {
    const subcategoryData = [
        { id: "1", subcategory: "Acting/Modeling", categoryCount: "50" },
        { id: "2", subcategory: "Ad Copywriting", categoryCount: "30" },
        { id: "3", subcategory: "Ad Film Concept Ideas", categoryCount: "45" },
        { id: "4", subcategory: "Ad Film Concept Writing", categoryCount: "55" },
        { id: "5", subcategory: "Animation/VFX", categoryCount: "22" },
        { id: "6", subcategory: "Art Direction Ideas", categoryCount: "25" },
        { id: "7", subcategory: "Background Music Composing", categoryCount: "35" },
        { id: "8", subcategory: "Band/Instruments", categoryCount: "95" },
        { id: "9", subcategory: "Character Designing", categoryCount: "23" },
        { id: "10", subcategory: "Commercial Jingles Singing", categoryCount: "12" },
        { id: "11", subcategory: "Dancing/Choreography", categoryCount: "35" },
        { id: "12", subcategory: "Dialogue Delivery", categoryCount: "42" },
        { id: "13", subcategory: "Dialogue writing", categoryCount: "30" },
        { id: "14", subcategory: "Documentary Film Scripts", categoryCount: "30" },
        { id: "15", subcategory: "Dubbing & Voice Over", categoryCount: "60" },
        { id: "16", subcategory: "Fashion Designing", categoryCount: "20" },
        { id: "17", subcategory: "Film Locations Photography & Videography", categoryCount: "50" },
        { id: "18", subcategory: "Film Story Lines", categoryCount: "45" },
        { id: "19", subcategory: "Graphic/Poster Designing", categoryCount: "28" },
        { id: "20", subcategory: "Illustrations/Storyboard/Sketch", categoryCount: "24" },
        { id: "21", subcategory: "Jingles Ad Lyric Writing", categoryCount: "24" },
        { id: "22", subcategory: "Lyric Writing", categoryCount: "23" },
        { id: "23", subcategory: "Movie Script Writing", categoryCount: "28" },
        { id: "24", subcategory: "Music Composing", categoryCount: "27" },
        { id: "25", subcategory: "Rap Lyric Writing", categoryCount: "22" },
        { id: "26", subcategory: "Rap Singing", categoryCount: "28" },
        { id: "27", subcategory: "Reality Show Ideas", categoryCount: "20" },
        { id: "28", subcategory: "Rerecording", categoryCount: "50" },
        { id: "29", subcategory: "Screen Writing", categoryCount: "51" },
        { id: "30", subcategory: "Short Film Contest", categoryCount: "26" },
        { id: "31", subcategory: "Short Film Script Writing", categoryCount: "43" },
        { id: "32", subcategory: "Singing", categoryCount: "29" },
        { id: "33", subcategory: "Sound Designing", categoryCount: "42" },
        { id: "34", subcategory: "Story Writing", categoryCount: "43" },
        { id: "35", subcategory: "Subtitles Writing", categoryCount: "58" },
        { id: "36", subcategory: "Tag line/ Slogan/ Caption", categoryCount: "57" },
        { id: "37", subcategory: "Translation", categoryCount: "30" },
        { id: "38", subcategory: "TV Serial Script Writing", categoryCount: "21" },
        { id: "39", subcategory: "Web Series Script Writing", categoryCount: "15" },
        { id: "40", subcategory: "YouTube Content Ideas", categoryCount: "22" },
    ]
    const subCategoryList = (categoryValue) => {
        return (
            <SubCategories
                key={categoryValue.id}
                subcategory={categoryValue.subcategory}
                categoryCount={categoryValue.categoryCount}
            />
        )
    }
    return (
        <>
            <Header />
            <Slider />
            <HowItWorks />
            <Contest />
            <Categories />
            <section id="subCategory">
                <div class="container">
                    <div class="subCategoryLists">
                        <ul className='list-unstyled mb-0'>
                            {subcategoryData.map(subCategoryList)}
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
