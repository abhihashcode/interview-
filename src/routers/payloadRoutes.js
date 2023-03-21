import express, { application } from "express";
import mongoose from "mongoose";
import payloadMod from "../models/payloadModels.js";
const router = express.Router();

const payload = [
  { productId: 123, quantity: 10, operation: "add" },

  { productId: 143, quantity: 14, operation: "add" },

  { productId: 193, quantity: 17, operation: "subtract" },
];

router.post("/", (req, res, next) => {
  let dataID = payload.productId;
  let quantity = payload.quantity;
  let oprtation = payload.operation;

  if (oprtation == "add") {
  }
});

export { router };
