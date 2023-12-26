import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req)
    res.send('Welcome to the API');
});

export default router;
