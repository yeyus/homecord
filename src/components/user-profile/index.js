import './UserProfile.css';

function UserProfile({ user }) {
    return (
        <div className="UserProfile">
            <div className="UserProfile-image">
                <img src={user.img} alt={user.name} />
            </div>
            <span className="UserProfile-name">{user.name}</span>
        </div>
    );
}

export default UserProfile;