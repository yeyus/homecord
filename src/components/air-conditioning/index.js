import { useState } from 'react';
import Switch from 'react-switch';

import plus from './plus.svg';
import minus from './minus.svg';
import './AirConditioning.css';

function AirConditioning({ initialTemp = 65, isActivated = false }) {
    const [ active, setActive ] = useState(isActivated);
    const [ temp, setTemp ] = useState(initialTemp);

    const handleSwitchChange = (checked) => setActive(checked);

    const handleTempChange = (delta) => () => setTemp(temp => temp + delta);

    return (
        <div className="AC">
            <div className="AC-temp">{temp} °F</div>
            <button className="AC-button" onClick={handleTempChange(1)}><img src={plus} alt="Increase" /></button>
            <button className="AC-button" onClick={handleTempChange(-1)}><img src={minus} alt="Decrease" /></button>

            <Switch 
                className="switch"
                onChange={handleSwitchChange} 
                checked={active}
                offColor="#444b52"
                onColor="#3d4170"
                onHandleColor="#5865F2"
                offHandleColor="#6A7480"
                boxShadow="0px 8px 16px rgba(0, 0, 0, 0.24)"
                height={16}
                width={36}
                handleDiameter={20}
                checkedIcon={false}
                uncheckedIcon={false} />
        </div>
    )
}

export default AirConditioning;