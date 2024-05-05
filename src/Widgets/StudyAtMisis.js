import React from 'react'
import "../Styles/StudyAtMisis.css";
import arrow from "../Images/arrow.svg"
import photo from "../Images/photo.svg"

export default function StudyAtMisis() {
    return (
        <div className='StudyAtMisis'>
            <div className='StudyPage'>
                <div className='StudyPage_txt'>
                    <h1 className='Study_txt'>учишься в</h1>
                    <h1 className='Misis_txt'>мисис?</h1>
                </div>
                <img src={arrow} className='Arrow_img'/>
                
            </div>
            <div className='Choose'>
                <div className='Choose_txt'>
                    <h1>ВЫБИРАЙ то,</h1>
                    <h1>что НРАВИТСЯ</h1>
                </div>
                <img src={photo} className='Choose_photo' />
            </div>
        </div>
    );
}