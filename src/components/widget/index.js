import './Widget.css';

function Widget({ children, label }) {
    return (
        <div className="Widget">
            <div className="Widget-label">{label}</div>
            <div className="Widget-contents">
                { children }
            </div>
        </div>
    );
}

export default Widget;