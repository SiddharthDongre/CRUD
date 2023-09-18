import cors from "cors";
import express from "express";
import { create, read, dlt } from "./route.js";

let app, hostName, port;

app = express();

hostName = "127.0.0.1";
port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", create);
app.get("/", read);
app.delete("/:id", dlt)

app.listen(port, hostName, () => {
  console.log(`Server is listing on port http://${hostName}:${port}`);
});