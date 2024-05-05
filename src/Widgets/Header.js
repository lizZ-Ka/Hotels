import React from 'react'
import "../Styles/Header.css";
import logo from "../Images/logo.svg";
import right_img from "../Images/right_img.svg";
import left_img from "../Images/left_img.svg";


export default function Header() {
    return (
        <div className='Header'>
            <div className='Header_content'>
                <img className='Logo' src={logo} />
                <div className='Header_info'>
                <ul className="Header_links">
                    <li>
                        <a href="/" className='Header_link'>О нас</a>
                    </li>
                    <li>
                        <a href="/" className='Header_link'>Контакты</a>
                    </li>
                    <li>
                        <a href="/" className='Header_link'>Что-то еще</a>
                    </li>
                </ul>
                </div>
                <button className='Header_btn'>Войти</button>
            </div>
            <div className='Header_main'>
                <div className='Header_main_line_one'>
                    <h1 className='Header_main_txt' id='find'>найди</h1>
                    <img src={right_img} className='Header_img' id='right_img'/>
                </div>
                <div className='Header_main_line_two'>
                    <img src={left_img} className='Header_img' id='left_img'/>
                    <h1 className='Header_main_txt' id='your'>свою</h1>
                </div>
                <h1 className='Header_main_txt' id='team'>команду</h1>
            </div>
            <div className='Header_reg'>
                <p className='Header_reg_txt'>Meet MISIS поможет найти людей, объединенных одной целью</p>
                <button className='Header_reg_btn'>регистрация</button>
                <a href='/' className='Header_reg_link'>Как это работает</a>
            </div>
        </div>
    );
}