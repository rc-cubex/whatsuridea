import React from 'react'
import ContestList from './ContestList'

// Img
import contest_1 from '../../assets/images/contest_1.png'

export default function Contest() {

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
            id: "3",
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
            id: "4",
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
            id: "5",
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
    ]

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
            <section id="contest">
                <div className="container">
                    <h2 className="sectionHeading">Latest Contests</h2>
                    <div className="row">
                        {contestList.map(contestTile)}
                        <a href="./contest.html" className="themeButton m-auto mt-4">View All Contests</a>
                    </div>
                </div>
            </section>
        </>
    )
}
