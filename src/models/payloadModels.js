import mongoose from "mongoose";
import payloadSchema from "./payloadSchema.js";

const payloadModel = mongoose.model("payloadMod", payloadSchema);

export default payloadModel;
