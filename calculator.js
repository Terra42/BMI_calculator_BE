import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
  });

app.post('/',(req, res)=>{
    let weight = parseFloat(req.body.num1);
    let height = parseFloat(req.body.num2) / 100;
    let result = parseFloat(weight / (height * height)).toFixed(2);
    res.send('Your BMI is: ' + result)
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
  });