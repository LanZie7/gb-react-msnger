import './Message.styles.css';

export const Message = ({ author, text }) => {
    return (
        <div className="message">
            <span>{ author }:</span>
            <span>{ text }</span>
        </div>
    );
}

// import React from "react";
//
// export class Message extends React.Component {
//     render() {
//         const { name, age, doSmth } = this.props;
//         return (
//             <h3 onClick={doSmth}>
//                 Message from { name }, { age }
//             </h3>
//         )
//     }
// }