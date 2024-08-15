import express from 'express';
import {imagesUpload} from "../multer";
import fileDb from "../fileDB";

const guestbookRouter = express.Router();
guestbookRouter.use(express.json());

guestbookRouter.post('/messages', imagesUpload.single('photo'), async (req, res) => {
    const {message} = req.body;
    await fileDb.init();

    if (!message) {
        return res.status(400).send({ error: 'Message is required' });
    }

    const messages = {
        author: req.body.author ? req.body.author : 'Anonymous',
        message:req.body.message,
        photo: req.file ? req.file.filename : null,
    }
    await fileDb.addItem(messages);
    res.send(messages);

});
export default guestbookRouter;