import './ManageDevices.css';
import { useState } from 'react';
import lightbulb from '../header/lightbulb.svg';
import Switch from 'react-switch';

function Device({ name, isActivated }) {
    const [ active, setActive ] = useState(isActivated);

    const handleSwitchChange = (checked) => setActive(checked);

    return (
        <li className={['Device-item'].concat(active ? ['active'] : []).join(' ')}>
            <img src={lightbulb} alt={name} />
            <span className="Device-name">{name}</span>
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
        </li>
    );
}

function ManageDevices({ devices }) {
    return (
        <>
            <ul className="ManageDevices">
                { devices.map((device) => <Device key={device.id} {...device} />)}                
            </ul>
            <button className="tiny-button">Add new device</button>
        </>
    )
}

export default ManageDevices;