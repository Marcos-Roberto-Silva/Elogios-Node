import express from "express";

const app =  express();

app.use(express.json());

app.post('/', (request, response) => {
    const { message } = request.body;
    return response.status(200).json({ message })
});

const PORT = 8080;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));