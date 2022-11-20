import express from 'express';
// import router  from './routes/employeRout';
import { z } from 'zod';
import router from './routes/parkRout'


const app = express();

app.use(express.json());

app.use('/api/v1/park', router);

app.listen(5000, () => {
    console.log('Server is running in port 5000')
});