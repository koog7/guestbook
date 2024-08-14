import * as React from "react";
import {ChangeEvent, useRef, useState} from "react";
import {Button, TextField} from "@mui/material";

const Home = () => {
    const urlFile = useRef(null)
    const [fileName , setFileName] = useState('')
    const [authorText , setAuthorText] = useState('')
    const [messageText , setMessageText] = useState('')

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileInput = e.target.files;

        if (fileInput && fileInput[0]) {
            const selectedFile = fileInput[0];
            setFileName(selectedFile.name);
            console.log(selectedFile.name);
        } else {
            setFileName('');
        }
    }
    return (

        <div>
            <form style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '25px'}}>
                <TextField
                    id="outlined-controlled"
                    label="Author name"
                    value={authorText}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setAuthorText(event.target.value);
                    }}
                    InputProps={{
                        style: {
                            color: 'white',
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            color: 'white',
                        },
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white',
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white',
                            },
                        },
                    }}
                />
                <TextField
                    id="outlined-controlled"
                    label="Author message"
                    value={messageText}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setMessageText(event.target.value);
                    }}
                    InputProps={{
                        style: {
                            color: 'white',
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            color: 'white',
                        },
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white',
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white',
                            },
                        },
                    }}
                />
                <input type={"file"} ref={urlFile} accept="image/*" onChange={onFileChange}/>
                <Button variant="contained" type={"submit"}>Send!</Button>
            </form>
        </div>
    );
};

export default Home;