
import express, { Router } from 'express';
import router from './routes.js';
import cors from 'cors';



const app = express();

// middlewares
app.use(express.json());
app.use(cors({
    origin:'*',
}))



app.use('/api', router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
