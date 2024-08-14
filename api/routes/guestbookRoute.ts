import express from 'express';

const guestbookRouter = express.Router();
guestbookRouter.use(express.json());

guestbookRouter.post('/messages', async (req, res) => {
    res.send('Test')
});

export default guestbookRouter;