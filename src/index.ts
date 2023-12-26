import express, {Request, Response} from 'express';
import indexRoute from './routes/indexRoute';

const app = express()
const port = process.env.PORT || 3000;


app.use('/', indexRoute);


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});