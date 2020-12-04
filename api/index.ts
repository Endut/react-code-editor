import express, { Express, NextFunction, Request, Response } from "express";
import { Server } from "http";
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import path from 'path';


const app: Express = express();
const httpServer = new Server(app);
const port = process.env.API_PORT ? parseInt(process.env.API_PORT) : 8081;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));


httpServer.listen(port, () => {
  console.log(`http listening on localhost:${port}`);
});
