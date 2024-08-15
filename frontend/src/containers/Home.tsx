import * as React from "react";
import {ChangeEvent, useRef, useState} from "react";
import {Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {postData} from "./Thunk/FetchThunk.ts";

const Home = () => {

    const dispatch = useDispatch();
    const urlFile = useRef(null)
    const [file, setFile] = useState<File | null>(null);
    const [authorText , setAuthorText] = useState('')
    const [messageText , setMessageText] = useState('')


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(postData({ author: authorText, message: messageText , photo: file}));
    };

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const fileInput = e.target.files

        if (fileInput && fileInput[0]) {
            setFile(fileInput[0])
        } else {
            setFile(null)
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
                <Button variant="contained" type={"submit"} onClick={handleSubmit}>Send!</Button>
            </form>

            {/*{data.length === 0 ? (*/}
            {/*    <div>No messages found</div>*/}
            {/*) : (*/}
            {/*    <ul>*/}
            {/*        {data.map((message, index) => (*/}
            {/*            <li key={index}>*/}
            {/*                <strong>Author:</strong> {message.author || 'Anonymous'}<br />*/}
            {/*                <strong>Message:</strong> {message.message}<br />*/}
            {/*                {message.photo && (*/}
            {/*                    <img src={URL.createObjectURL(message.photo)} alt="Uploaded" width="100" />*/}
            {/*                )}*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*)}*/}
        </div>
    );
};

export default Home;