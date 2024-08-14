import express from 'express';

const guestbookRouter = express.Router();
guestbookRouter.use(express.json());

guestbookRouter.post('/messages', async (req, res) => {
    const { author = 'Anonymous', message, photo = '' } = req.body;

    if (!message) {
        return res.status(400).send({ error: 'Message is required' }); // Проверка обязательного поля
    }

    res.send({ author, message, photo });

});
export default guestbookRouter;