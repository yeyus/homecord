import './Housemates.css';
import UserProfile from '../user-profile';

function HousematesWidget({ users = [] }) {
    return (
        <div className="HousematesWidget">
            { users.map((user) => <UserProfile key={user.id} user={user} />) }
        </div>
    );
}

export default HousematesWidget;