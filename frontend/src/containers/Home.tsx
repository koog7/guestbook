import * as React from "react";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {Button, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getMessages, postData} from "./Thunk/FetchThunk.ts";
import {RootState} from "../app/store.ts";
import CardMessage from "../components/CardMessage.tsx";

const Home = () => {

    const dispatch = useDispatch();
    const urlFile = useRef(null)
    const [file, setFile] = useState<File | null>(null);
    const [authorText , setAuthorText] = useState('')
    const [messageText , setMessageText] = useState('')
    const {data} = useSelector((state: RootState) => state.guestbook);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(messageText){
            dispatch(postData({ author: authorText, message: messageText , photo: file || undefined}));


            setFile(null);
            setAuthorText('');
            setMessageText('');

            if (urlFile.current) {
                urlFile.current.value = '';
            }
        }
    };

    useEffect(() => {
        dispatch(getMessages())
    }, [dispatch]);

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
            <form style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '25px'}} onSubmit={handleSubmit}>
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

            {data.length === 0 ? (
                <div>No messages found</div>
            ) : (
                <div>
                    {data.map((message, index) => (
                        <CardMessage key={index} photo={message.photo} author={message.author} message={message.message} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;