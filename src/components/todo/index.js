import { useState } from 'react';

import './ToDo.css'

import check from './check.svg';

function DoneSwitch({ active, onChange }) {
    return (
        <button className={['DoneSwitch'].concat(active ? ['active'] : []).join(' ')} onClick={onChange} >{active && <img src={check} alt="Done" />}</button>
    )
}

function ToDoItem({ label, isDone }) {
    const [ active, setActive ] = useState(isDone);

    const handleSwitchChange = () => setActive(!active);

    return (
        <li className={['ToDo-item'].concat(active ? ['active'] : []).join(' ')}>
            <span className="ToDo-label">{label}</span>
            <DoneSwitch active={active} onChange={handleSwitchChange} />
        </li>
    );
}

function ToDoList({ todos }) {
    return (
        <>
            <ul className="ToDo">
                { todos.map((todo) => <ToDoItem key={todo.id} {...todo} />)}                
            </ul>
            <button className="tiny-button">Add new task</button>
        </>
    );
}

export default ToDoList;