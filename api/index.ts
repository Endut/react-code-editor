import express, { Express } from "express";
import { Server } from "http";
import bodyParser from 'body-parser';
import cors from 'cors';

const app: Express = express();
const httpServer = new Server(app);
const port = process.env.API_PORT ? parseInt(process.env.API_PORT) : 8081;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.put('/documents', (req, res) => {
  res.json({
    info: "really great project, thanks.",
    url: "https://github.com/Endut/react-code-editor/archive/main.zip",
  });
});


httpServer.listen(port, () => {
  console.log(`http listening on localhost:${port}`);
});
