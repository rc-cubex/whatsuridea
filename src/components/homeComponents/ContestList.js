import React from 'react'

import { Link } from 'react-router-dom';

// Img
import trofhy from '../../assets/images/trofhy.png'

export default function ContestList(props) {
    return (
        <div className="col-lg-12 col-md-6 col-sm-6">
            <Link href="/ContestDetail" className="d-flex contestRow">
                <div className="contestPhoto">
                    <img src={props.profilePhoto} alt="img" className="img-fluid" />
                    <p><span>{props.userId}</span></p>
                </div>
                <div className="flex-fill contestDescription">
                    <h4>{props.contestName}</h4>
                    <ul className="list-unstyled d-flex flex-wrap">
                        <li><b>Language</b> : {props.contestLanguage}</li>
                        <li><b>Project Type</b> : {props.contestType}</li>
                        <li><b>Theme</b> : {props.contestTheme}</li>
                        <li><b>Situation</b> : {props.contestSituation}</li>
                    </ul>
                    <p><b>Description:</b> {props.contestDescription}</p>
                    <div className="status"><span>Active:</span> {props.remainingTime} Days Remaining - {props.noOfEntries} Entrys</div>
                    <p className="btns">{props.sealed}</p>
                </div>
                <div className="contestTrofhy">
                    <img src={trofhy} alt="trophy" className="img-fluid" />
                    <h5>Prize</h5>
                    <h6>RS.{props.contestPrice}</h6>
                    <p>Entry Fee : RS.{props.entryFees}</p>
                </div>
            </Link>
        </div>
    )
}
