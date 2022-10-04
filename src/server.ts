import express from 'express'
import { router } from './routes';

import "./database"

const port = process.env.PORT || 3333

const app = express()

app.use(express.json());

app.use(router);

app.listen((port), ()=>{
    console.log('Server Rodando  teste de novo na  porta :', 3333);
})

//