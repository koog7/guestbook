import express from 'express';
import guestbookRouter from "./routes/guestbookRoute";

const app = express();
const port = 8000;


app.use(express.json())
app.use('/', guestbookRouter)


const run = async () => {

    app.listen(port, () => {
        console.log('Server starter : http://127.0.0.1:' + port);
    });
};

run().catch(console.error);