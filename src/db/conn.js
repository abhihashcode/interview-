import mongoose from "mongoose";

const dbConnecter = () =>
  mongoose
    .connect("mongodb://127.0.0.1:27017")
    .then(() => {
      console.log("Connected");
    })
    .catch((err) => {
      console.log(err);
    });

export default dbConnecter;
