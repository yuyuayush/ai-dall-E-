import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


import connectDb from './mongodb/connect.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));


app.get('/',(req,res)=>{
    res.send('hello from DALL-E!');
})

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);


const startServer = async()=>{
try{
 connectDb(process.env.MONGODB_URL);
 
 app.listen(8000,()=>console.log('server has started on port http://localhost:8080'))
}catch(error){
    console.log(error);
}
}
startServer();