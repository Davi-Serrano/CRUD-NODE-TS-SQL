import "reflect-metadata"
import express from 'express'
import { router } from './routes';

import "./database"
import "./shared/container"

const port = process.env.PORT || 3333

const app = express()

app.use(express.json());

app.use(router);

app.listen((port), ()=>{
    console.log('Server Rodando  na  porta ', port);
})

//