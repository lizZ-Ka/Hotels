import React from 'react'
import "../Styles/HowItWorks.css";
import messages from "../Images/messages.svg"
import flag from "../Images/flag.svg"
import fire from "../Images/fire2.svg"
import ed from "../Images/education.svg"
import wave from "..//Images/wave.svg"

export default function HowItWorks() {
    return (
        <div className='HowItWorks'>
            <h1 className='HowItWorks_txt'>Как это работает?</h1>
            <div className='Messages_block'>
                <img src={messages} className='Messages_img' />
                <div className='Instruction'>
                    <div className='Instruction_block'>
                    <img src={flag} className='Instruction_img'/>
                    <p className='Instruction_txt'>Заполни информацию о себе</p>
                    </div>
                    <div className='Instruction_block'>
                    <img src={fire} className='Instruction_img'/>
                    <p className='Instruction_txt'>выбери интересующую тебя область</p>
                    </div>
                    <div className='Instruction_block'>
                    <img src={ed} className='Instruction_img'/>
                    <p className='Instruction_txt'>получай знания и делись опытом</p>
                    </div>
                </div>
            </div>
            
            <img src={wave} className='Wave_img'/>
            <h1 className='Authors'>@2024 MISIS FULLHOUSE</h1>
        </div>
    );
}