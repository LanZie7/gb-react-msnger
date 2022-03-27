import './Message.styles.css';

export const Message = ({ name, age }) => {
    return (
        <h3 className={ "message" }>
            Message from { name }, { age }
        </h3>
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