import './Appliances.css'

function Appliances(props) {
    return (
        <ul className="Appliances">
            <li className="Appliance-item">
                <span className="Appliance-label">Dishwasher</span>
                <div className="Appliance-status green">Available</div>
            </li>
            <li className="Appliance-item">
                <span className="Appliance-label">Washer</span>
                <div className="Appliance-status red">In Use</div>
            </li>
            <li className="Appliance-item">
                <span className="Appliance-label">Dryer</span>
                <div className="Appliance-status burple">Done</div>
            </li>
        </ul>
    );
}

export default Appliances;