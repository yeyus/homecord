import { useEffect, useState } from 'react';

import './Header.css';

import home from './home.svg';
import sunny from './sunny.svg';
import lightbulb from './lightbulb.svg';
import bell from './bell.svg';
import gear from './gear.svg';

const processTime = (date) => `${date.getHours()}:${date.getMinutes()} ${ date.getHours() >= 12 ? 'PM' : 'AM'}`;

const processDate = (date) => new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);

function DateTime() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let interval = setInterval(() => {
            setDate(new Date());
        }, 60000);

        return () => {
            clearInterval(interval);
        }
    })
    return (
        <>
            <span className="Header-time">{ processTime(date) }</span>
            <span className="Header-date">{ processDate(date) }</span>
        </>
    );
}

function Header(props) {
    return (
        <header className="Header">
            <div className="Header-left">
                <div className="Header-logo">
                    <span className="icon"><img src={home} alt="Home" /></span>
                    <span className="text">
                        home<span className="light-font">cord</span>
                    </span>
                </div>
                <div className="Header-pill">
                    <DateTime />
                    <span className="Header-weather">
                        <span className="icon"><img src={sunny} alt="Sunny" /></span>
                        <span className="text">65 F</span>
                    </span>
                </div>
            </div>
            
            <div className="Header-right">
                <div className="header-actions">
                    <button className="Header-action-button"><img src={lightbulb} alt="Theme" /></button>
                    <button className="Header-action-button"><img src={bell} alt="Notifications" /></button>
                    <button className="Header-action-button"><img src={gear} alt="Settings" /></button>
                    <button className="Header-action-button"><img src="http://cdn.discordapp.com/avatars/202530586709983233/c1cd0bd97c3313d7772786e74be113c0.webp?size=32" alt="User profile" /></button>
                </div>
            </div>            
        </header>
    );
}

export default Header;