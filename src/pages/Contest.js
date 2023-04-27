import React, { useState } from 'react'

// Layouts
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

// Components
import InnerSlider from '../components/commonComponents/InnerPageSlider'
import ContestCategoryTile from '../components/contest/ContestCategoryTile'
import ContestList from '../components/homeComponents/ContestList'

// Icons
import category_1 from '../assets/images/category_1.png'
import category_2 from '../assets/images/category_2.png'
import category_3 from '../assets/images/category_3.png'
import category_4 from '../assets/images/category_4.png'
import category_5 from '../assets/images/category_5.png'
import category_6 from '../assets/images/category_6.png'
import category_7 from '../assets/images/category_7.png'
import category_8 from '../assets/images/category_8.png'
import category_9 from '../assets/images/category_9.png'
import category_10 from '../assets/images/category_10.png'
import category_11 from '../assets/images/category_11.png'
import category_12 from '../assets/images/category_12.png'
import category_13 from '../assets/images/category_13.png'
import category_14 from '../assets/images/category_14.png'
import category_15 from '../assets/images/category_15.png'
import contest_1 from '../assets/images/contest_1.png'

export default function Contest() {

    const CategoryData = [
        { id: '1', tileIcon: category_1, tileTitle: 'Acting/Modeling' },
        { id: '2', tileIcon: category_2, tileTitle: 'Advertising/Marketing' },
        { id: '3', tileIcon: category_3, tileTitle: 'Band Instruments' },
        { id: '4', tileIcon: category_4, tileTitle: 'Beauty & Fashion' },
        { id: '5', tileIcon: category_5, tileTitle: 'Camera/Cinematography' },
        { id: '6', tileIcon: category_6, tileTitle: 'Dancing/Choreography' },
        { id: '7', tileIcon: category_7, tileTitle: 'Creative Ideas & Concepts' },
        { id: '8', tileIcon: category_8, tileTitle: 'Creative Writing Slogans & Taglines' },
        { id: '9', tileIcon: category_9, tileTitle: 'Designing/Graphics' },
        { id: '10', tileIcon: category_10, tileTitle: 'Film Making /Direction' },
        { id: '11', tileIcon: category_11, tileTitle: 'Music Composition' },
        { id: '12', tileIcon: category_12, tileTitle: 'Photography' },
        { id: '13', tileIcon: category_13, tileTitle: 'Script Writing' },
        { id: '14', tileIcon: category_14, tileTitle: 'Short Films' },
        { id: '15', tileIcon: category_15, tileTitle: 'Singing/Dubbing' },
    ]

    const categoryTile = (categoryEvent) => {
        return (
            <ContestCategoryTile
                key={categoryEvent.id}
                tileIcon={categoryEvent.tileIcon}
                tileTitle={categoryEvent.tileTitle}
            />
        )
    }


    const contestList = [
        {
            id: "1",
            profilePhoto: contest_1,
            userId: "#123",
            contestName: "Ad Film Concept Writing Contest (English)",
            contestLanguage: "English",
            contestType: "Ad Film",
            contestTheme: "Any",
            contestSituation: "--",
            contestDescription: "We are searching for new creative ad concepts for our upcoming VOD platform Kokoroko. It is a video on demand platform like Netflix, Hotstar, Amazon Prime, ALT Balaji. creative ad concepts for our upcoming VOD...",
            remainingTime: "6",
            noOfEntries: "20",
            sealed: "sealed",
            contestPrice: "20,000",
            entryFees: "500"
        },
        {
            id: "2",
            profilePhoto: contest_1,
            userId: "#123",
            contestName: "Sort Film Script Writing Contest (English)",
            contestLanguage: "English",
            contestType: "Ad Film",
            contestTheme: "Any",
            contestSituation: "--",
            contestDescription: "We are searching for new creative ad concepts for our upcoming VOD platform Kokoroko. It is a video on demand platform like Netflix, Hotstar, Amazon Prime, ALT Balaji. creative ad concepts for our upcoming VOD...",
            remainingTime: "6",
            noOfEntries: "20",
            sealed: "sealed",
            contestPrice: "20,000",
            entryFees: "500"
        },
        {
            id: "3",
            profilePhoto: contest_1,
            userId: "#123",
            contestName: "Dialog Writing Contest (Hindi)",
            contestLanguage: "Hindi",
            contestType: "Ad Film",
            contestTheme: "Any",
            contestSituation: "--",
            contestDescription: "We are searching for new creative ad concepts for our upcoming VOD platform Kokoroko. It is a video on demand platform like Netflix, Hotstar, Amazon Prime, ALT Balaji. creative ad concepts for our upcoming VOD...",
            remainingTime: "6",
            noOfEntries: "20",
            sealed: "sealed",
            contestPrice: "20,000",
            entryFees: "500"
        },
        {
            id: "4",
            profilePhoto: contest_1,
            userId: "#123",
            contestName: "Banner Designing Contest",
            contestLanguage: "English",
            contestType: "Designing",
            contestTheme: "Any",
            contestSituation: "--",
            contestDescription: "We are searching for new creative ad concepts for our upcoming VOD platform Kokoroko. It is a video on demand platform like Netflix, Hotstar, Amazon Prime, ALT Balaji. creative ad concepts for our upcoming VOD...",
            remainingTime: "6",
            noOfEntries: "20",
            sealed: "sealed",
            contestPrice: "20,000",
            entryFees: "500"
        },
        {
            id: "5",
            profilePhoto: contest_1,
            userId: "#123",
            contestName: "Movie Script Writing Contest (Tamil)",
            contestLanguage: "Tamil",
            contestType: "Script Writing",
            contestTheme: "Any",
            contestSituation: "--",
            contestDescription: "We are searching for new creative ad concepts for our upcoming VOD platform Kokoroko. It is a video on demand platform like Netflix, Hotstar, Amazon Prime, ALT Balaji. creative ad concepts for our upcoming VOD...",
            remainingTime: "6",
            noOfEntries: "20",
            sealed: "sealed",
            contestPrice: "20,000",
            entryFees: "500"
        },
    ]

    const [searchResult, setSearchResult] = useState("")

    const handleSearch = (event) => {
        const data = event.target.value
        setSearchResult(data)
    }

    const contestTile = (val) => {
        return (
            <ContestList
                key={val.id}
                profilePhoto={val.profilePhoto}
                userId={val.userId}
                contestName={val.contestName}
                contestLanguage={val.contestLanguage}
                contestType={val.contestType}
                contestTheme={val.contestTheme}
                contestSituation={val.contestSituation}
                contestDescription={val.contestDescription}
                remainingTime={val.remainingTime}
                noOfEntries={val.noOfEntries}
                sealed={val.sealed}
                contestPrice={val.contestPrice}
                entryFees={val.entryFees}
            />
        )
    }

    return (
        <>
            <Header />
            <InnerSlider />
            <section id="innerCategory">
                <div class="container">
                    <ul class="innerCategoryTiles">
                        {CategoryData.map(categoryTile)}
                    </ul>
                </div>
            </section>
            <section id="contestSection">
                <div class="container">
                    <div class="secContainer">
                        <aside>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sub categories
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Acting/Modeling</a></li>
                                    <li><a class="dropdown-item" href="#">Ad Copywriting</a></li>
                                    <li><a class="dropdown-item" href="#">Ad Film Concept Ideas</a></li>
                                    <li><a class="dropdown-item" href="#">Ad Film Concept Writing</a></li>
                                    <li><a class="dropdown-item" href="#">Animation/VFX</a></li>
                                    <li><a class="dropdown-item" href="#">Art Direction Ideas</a></li>
                                    <li><a class="dropdown-item" href="#">Background Music Composing</a></li>
                                    <li><a class="dropdown-item" href="#">Band/Instruments</a></li>
                                    <li><a class="dropdown-item" href="#">Character Designing</a></li>
                                    <li><a class="dropdown-item" href="#">Commercial Jingles Singing</a></li>
                                    <li><a class="dropdown-item" href="#">Dancing/Choreography</a></li>
                                    <li><a class="dropdown-item" href="#">Dialogue Delivery</a></li>
                                    <li><a class="dropdown-item" href="#">Dialogue writing</a></li>
                                    <li><a class="dropdown-item" href="#">Documentary Film Scripts</a></li>
                                    <li><a class="dropdown-item" href="#">Dubbing & Voice Over</a></li>
                                    <li><a class="dropdown-item" href="#">Fashion Designing</a></li>
                                    <li><a class="dropdown-item" href="#">Film Locations Photography</a></li>
                                    <li><a class="dropdown-item" href="#">Film Locations Videography</a></li>
                                    <li><a class="dropdown-item" href="#">Film Story Lines</a></li>
                                    <li><a class="dropdown-item" href="#">Graphic/Poster Designing /Title Designing</a></li>
                                    <li><a class="dropdown-item" href="#">Illustrations/Storyboard/Sketch</a></li>
                                    <li><a class="dropdown-item" href="#">Jingles Ad Lyric Writing</a></li>
                                    <li><a class="dropdown-item" href="#">Lyric Writing</a></li>
                                    <li><a class="dropdown-item" href="#">Movie Script Writing</a></li>
                                    <li><a class="dropdown-item" href="#">Music Composing</a></li>
                                    <li><a class="dropdown-item" href="#">Rap Lyric Writing</a></li>
                                    <li><a class="dropdown-item" href="#">Rap Singing</a></li>
                                    <li><a class="dropdown-item" href="#">Reality Show Ideas</a></li>
                                    <li><a class="dropdown-item" href="#">Rerecording</a></li>
                                    <li><a class="dropdown-item" href="#">Screen Writing</a></li>
                                    <li><a class="dropdown-item" href="#">Short Film Contest</a></li>
                                    <li><a class="dropdown-item" href="#">Short Film Script Writing</a></li>
                                    <li><a class="dropdown-item" href="#">Singing</a></li>
                                    <li><a class="dropdown-item" href="#">Sound Designing</a></li>
                                    <li><a class="dropdown-item" href="#">Story Writing</a></li>
                                    <li><a class="dropdown-item" href="#">Subtitles Writing</a></li>
                                    <li><a class="dropdown-item" href="#">Tag line/ Slogan/ Caption</a></li>
                                    <li><a class="dropdown-item" href="#">Translation</a></li>
                                    <li><a class="dropdown-item" href="#">TV Serial Script Writing</a></li>
                                    <li><a class="dropdown-item" href="#">Web Series Script Writing</a></li>
                                    <li><a class="dropdown-item" href="#">YouTube Content Ideas</a></li>
                                </ul>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Project Type
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Ad copy</a></li>
                                    <li><a class="dropdown-item" href="#">Ad Film</a></li>
                                    <li><a class="dropdown-item" href="#">Advertisement</a></li>
                                    <li><a class="dropdown-item" href="#">Documentary</a></li>
                                    <li><a class="dropdown-item" href="#">Fashion Design</a></li>
                                    <li><a class="dropdown-item" href="#">Film/Movie</a></li>
                                    <li><a class="dropdown-item" href="#">Graphic Design</a></li>
                                    <li><a class="dropdown-item" href="#">Mini Movie</a></li>
                                    <li><a class="dropdown-item" href="#">Modeling</a></li>
                                    <li><a class="dropdown-item" href="#">Musical Album</a></li>
                                    <li><a class="dropdown-item" href="#">Photography</a></li>
                                    <li><a class="dropdown-item" href="#">Photoshoot</a></li>
                                    <li><a class="dropdown-item" href="#">Poster Design</a></li>
                                    <li><a class="dropdown-item" href="#">Promotional Video</a></li>
                                    <li><a class="dropdown-item" href="#">Rap Song</a></li>
                                    <li><a class="dropdown-item" href="#">Reality Show</a></li>
                                    <li><a class="dropdown-item" href="#">Shoot Location</a></li>
                                    <li><a class="dropdown-item" href="#">Title Design</a></li>
                                    <li><a class="dropdown-item" href="#">Tv Serial</a></li>
                                    <li><a class="dropdown-item" href="#">Video</a></li>
                                    <li><a class="dropdown-item" href="#">Web Series</a></li>
                                    <li><a class="dropdown-item" href="#">YouTube Video</a></li>
                                    <li><a class="dropdown-item" href="#">Other</a></li>
                                </ul>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">ASSAMESE</a></li>
                                    <li><a class="dropdown-item" href="#">BENGALI</a></li>
                                    <li><a class="dropdown-item" href="#">BHOJPURI</a></li>
                                    <li><a class="dropdown-item" href="#">ENGLISH</a></li>
                                    <li><a class="dropdown-item" href="#">GUJARATI</a></li>
                                    <li><a class="dropdown-item" href="#">HINDI</a></li>
                                    <li><a class="dropdown-item" href="#">KANNADA</a></li>
                                    <li><a class="dropdown-item" href="#">MALAYALAM</a></li>
                                    <li><a class="dropdown-item" href="#">MARATHI</a></li>
                                    <li><a class="dropdown-item" href="#">ODIA</a></li>
                                    <li><a class="dropdown-item" href="#">TAMIL</a></li>
                                    <li><a class="dropdown-item" href="#">TELUGU</a></li>
                                    <li><a class="dropdown-item" href="#">ANY</a></li>
                                </ul>
                            </div>
                        </aside>

                        <div class="rightPart">
                            <div class="contestSearch">
                                <div class="row align-items-center">
                                    <div class="col-md-6 col-sm-5 col-6">
                                        <div class="searchBar">
                                            <input type="text" placeholder="Search..." class="form-control border-0" onChange={handleSearch} value={searchResult} />
                                            <button class=" border-0"><i class="flaticon-loupe"></i></button>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-7 col-6 text-end">
                                        Sort by <select class="border-0">
                                            <option>Latest</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                {contestList.map(contestTile)}
                            </div>

                            {/* <nav aria-label="..." class="mb-5">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <span class="page-link">Previous</span>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item" aria-current="page">
                                        <span class="page-link">2</span>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                                    <li class="page-item"><a class="page-link" href="#">6</a></li>
                                    <li class="page-item"><a class="page-link" href="#">7</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav> */}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
