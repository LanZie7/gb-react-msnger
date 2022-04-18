
// Компонент можно переиспользовать
import {Button} from "@mui/material";

export const MyButton = ({ text, onclick }) => (
    <div role="button" onClick={ onclick }>
        { text }
    </div>
)

export const ChangeThemeBtn = ({ text, onClick, children }) => {
    console.log(children);
    return (
      <Button role="button" onClick={onClick}>
          {children}
      </Button>
    );
};

export const ChatButton = ({ text, onClick, children }) => {
    console.log(children);
    return (
      <div role="button" onClick={onClick}>
          {children}
      </div>
    );
};


// Функция высшего порядка
const foo = (a, b) => `${a} + ${b}`;
const bar = () => "bar";
// const addLog = (func) => () => {
//   console.log('0-0-0-0-0');
//   func();

function addLog(func) {
  return function (...args) {
    console.log('0-0-0-0-0');
    return func(...args);
  };
}

const fooWithLog = addLog(foo);
const barWithLog = addLog(bar);

fooWithLog(1, 2);
fooWithLog(3, 4);
barWithLog(bar);
