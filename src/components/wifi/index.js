import './Wifi.css';

import wifi from './wifi.svg';

function WifiManagement(props) {
    return (
        <div className="WifiManagement">
            <img src={wifi} alt="Wifi Management" />
            <div className="wifi">
                <div className="wifi-name">Comcast-Sucks</div>
                <div className="wifi-status">Online</div>
            </div>
        </div>
    );
}

export default WifiManagement;