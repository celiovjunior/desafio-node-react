import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";

import userRoutes from "./routes/products.js"

const app = express();
const port = 3333;

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);

app.get("/", (req, res) => res.send("hello world!"))
app.all("*", (req, res) => res.send("O diretório não existe."))

app.listen(port, () => console.log(`Server is runnin on port: http://localhost:${port}`))