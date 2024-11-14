import express from "express"
import cors from "cors"
import mongoose from "mongodb"

const app = express();
app.use(cors());
app.use(express.json());

app.get('/test', (request, response) => {
    response.send("Testing");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
