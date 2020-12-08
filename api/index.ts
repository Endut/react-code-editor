import express, { Express } from "express";
import { Server } from "http";
import bodyParser from 'body-parser';
import cors from 'cors';

const app: Express = express();
const httpServer = new Server(app);
const port = process.env.API_PORT ? parseInt(process.env.API_PORT) : 8081;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/hi', (req, res) => {
  res.json({msg: 'hi'})
});


app.put('/documents', (req, res) => {
  console.log(req.body);
  res.json({ modelInfo: 'really great model, thanks' })
})

httpServer.listen(port, () => {
  console.log(`http listening on localhost:${port}`);
});
