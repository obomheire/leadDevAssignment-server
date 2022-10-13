import { Schema, model } from "mongoose";
import { Seller } from "../utils/interfaces";

const sellersSchema = new Schema<Seller>({
  seller_id: {
    type: String,
    required: true,
  },
  seller_zip_code_prefix: {
    type: Number,
    required: true,
  },
  seller_city: {
    type: String,
    required: true,
  },
  seller_state: {
    type: String,
    required: true,
  },
});

sellersSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

sellersSchema.set("toJSON", {
  virtuals: true,
});

export const Sellers = model<Seller>("Sellers", sellersSchema);
