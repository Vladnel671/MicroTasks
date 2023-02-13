import React, {useState} from 'react';

const Task2 = () => {
    let [message, setMessage] = useState([
        {message:'message1'},
        {message:'message2'},
        {message:'message3'},
    ])
    return (
        <div className={'App'}>
            <div>
                <input type="text"/>
            </div>
        </div>
    );
};

export default Task2;