import express from "express";
// import mongoose from 'mongoose'
import dbConnecter from "./src/db/conn.js";
import { router } from "./src/routers/payloadRoutes.js";

const port = "3000";
const app = express();

app.use("/", router);
// app.post('/',())

dbConnecter();
app.listen(port, () => {
  console.log("Server Listened");
});
