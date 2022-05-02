import PropTypes from 'prop-types';
import { Component, useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";

import './Message.styles.css';


export const Message = ({ author, text, theme }) => {
  // const { theme } = useContext(ThemeContext);
  // console.log(theme);

    return (
        <div className="message">
            <span style={{ color: theme === "dark" ? "red" : "blue" }}>
              { author }:
            </span>
            <span>{" " + text }</span>
        </div>
    );
};

Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string,
}

/*
const withBlueColor = (Component) => (props) => {
  return <Component {...props} color="darkblue" />
};

export const MessageWithBlueColor = withBlueColor(Message);
*/


const withThemeContext = (Component) => (props) => {
  const { theme } = useContext(ThemeContext);

  return <Component {...props} theme={theme} />
};

export const MessageWithBlueColor = withThemeContext(Message);



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