import express from "express";
import * as dotenv from "dotenv";
import "reflect-metadata";
import "./database";

import { router } from "./routes";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;


app.use(router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));