import {useEffect, useRef, useState} from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from '@material-ui/icons/Send';

import './Form.styles.css';


export const Form = ({ onSubmit }) => {
    const [value, setValue] = useState("");

    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(value);
        setValue("");
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        console.log("did mount", inputRef);
        inputRef.current?.focus();

        return () => {
            console.log("will mount");
        };
    }, []);

    return (
        <form className="msgForm" onSubmit={ handleSubmit }>
            <TextField
                id="outlined-basic"
                label="Message"
                variant="outlined"
                value={ value }
                onChange={ handleChange }
                type="text"
                ref={ inputRef }
            />
            <Button className="sendBtn" type="submit" variant="contained" endIcon={<SendIcon />}>Send</Button>
        </form>
    );
};