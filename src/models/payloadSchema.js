import mongoose from "mongoose";

const payloadSchema = mongoose.Schema({
  productId: {
    type: String,
    required: "true",
  },
  quantity: {
    type: String,
    required: "true",
  },
  operation: {
    type: String,
    required: "true",
  },
});

export default payloadSchema;
