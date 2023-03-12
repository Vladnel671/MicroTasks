import React, {useState} from 'react';
import {Input} from "./components/Input";
import {Button} from "./components/Button";

// function App() {
//     let [message, setMessage] = useState([
//         {message: 'message1'},
//         {message: 'message2'},
//         {message: 'message3'},
//     ])
//
//     let [title, setTitle] = useState('')
//     console.log(title)
//
//     const addMessage = (title: string) => {
//         let newMessage = {message: title}
//         setMessage([newMessage, ...message,])
//     }
//     const CallBackButtonHandler = () => {
//         addMessage(title)
//         setTitle('')
//     }
//
//     return (
//         <div className={'App'}>
//             <Input setTitle={setTitle} title={title}/>
//             <Button name={'+'} callback={CallBackButtonHandler}/>
//             {message.map((el, index) => {
//                 return (
//                     <div key={index}>{el.message}</div>
//                 )
//             })}
//         </div>
//     );
// }
//
// export default App;

function App() {
    return (
        <div>

        </div>
    )
}

export default App