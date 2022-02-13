import express from "express";
import cors from "cors";
import { create, read, dlt, update } from "./Route.js";

const app = express();

const hostname = "127.0.0.1";
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Routers Get and Post
app.post("/", create);
app.get("/", read);
app.put("/:id", update);
app.delete("/:id", dlt)

// Server
app.listen(port, hostname, () => {
    console.log(`Server is listening on port http://${hostname}:${port}`);
});