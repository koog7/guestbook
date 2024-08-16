import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import * as React from "react";

interface Props {
    photo: string,
    author: string,
    message: string,
}

const CardMessage:React.FC<Props> = ({photo, author , message}) => {
    return (
        <div>
            <Grid item xs={12} sm={6} md={4} sx={{marginTop:'10px'}}>
                <Card>
                    {photo && (
                        <CardMedia
                            component="img"
                            height="140"
                            image={`http://127.0.0.1:8000/images/${photo}`}
                            alt="Uploaded"
                        />
                    )}
                    <CardContent>
                        <Typography variant="h6" component="div">
                            Author: {author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {message}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
};

export default CardMessage;