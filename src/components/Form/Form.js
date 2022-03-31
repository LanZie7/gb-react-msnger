import { useState } from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from '@material-ui/icons/Send';

export const Form = ({ onSubmit }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(value);
        setValue("");
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <TextField
                id="outlined-basic"
                label="Message"
                variant="outlined"
                value={ value }
                onChange={ handleChange }
                type="text"
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>Send</Button>
        </form>
    );
};