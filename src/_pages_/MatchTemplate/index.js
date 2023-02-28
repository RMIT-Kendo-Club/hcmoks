import React from 'react'

// Import CSS
import '../HomeTemplate/index.css';

// Import Components
import Sidebar from '../../_components_/Sidebar';
import Footer from '../../_components_/Footer';

// Import Bracket
import { SingleEliminationBracket, DoubleEliminationBracket, Match, MATCH_STATES, SVGViewer } from '@g-loot/react-tournament-brackets';

const matches = [
    {
        "id": 260005,
        "name": "Final - Match",
        "nextMatchId": null, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        "tournamentRoundText": "4", // Text for Round Header
        "startTime": "2021-05-30",
        "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        "participants": [
            {
                "id": "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc", // Unique identifier of any kind
                "resultText": "WON", // Any string works
                "isWinner": false,
                "status": null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                "name": "giacomo123"
            },
            {
                "id": "9ea9ce1a-4794-4553-856c-9a3620c0531b",
                "resultText": null,
                "isWinner": true,
                "status": null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                "name": "Ant"
            }
        ]
    }
]

// const DoubleElimination = () => (
//     <DoubleEliminationBracket
//         matches={matches}
//         matchComponent={Match}
//         svgWrapper={({ children, ...props }) => (
//             <SVGViewer width={500} height={500} {...props}>
//                 {children}
//             </SVGViewer>
//         )}
//     />
// );

const SingleElimination = () => (
    <SingleEliminationBracket
        matches={matches}
        matchComponent={Match}
        svgWrapper={({ children, ...props }) => (
            <SVGViewer width={500} height={500} {...props}>
                {children}
            </SVGViewer>
        )}
    />
);

export default function index() {

    return (
        <div className='match-template'>
            {/* Sidebar */}
            <div className='sidebar'>
                <Sidebar />
            </div>

            {/* Bracket */}
            <div className='bracket'>
                <SingleElimination />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

