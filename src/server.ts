import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.post('/', (request, response) => {
    const { message } = request.body;
    return response.status(200).json({ message })
});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));