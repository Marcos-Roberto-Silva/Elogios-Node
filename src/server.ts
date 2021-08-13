import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import * as dotenv from "dotenv";
import "reflect-metadata";
import "./database";

import { router } from "./routes";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.use(router);

app.use((err: Error, _request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({ 
            error: err.message
        });
    }

    return response.status(500).json({
       status: "error",
       message: "Internal Server Error"
     });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));