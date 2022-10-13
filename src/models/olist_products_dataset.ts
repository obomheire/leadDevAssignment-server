import { Schema, model } from "mongoose";
import { Product } from "../utils/interfaces";

const productsSchema = new Schema<Product>({
  product_id: {
    type: String,
    required: true,
  },
  product_category_name: {
    type: String,
    required: true,
  },
  product_name_lenght: {
    type: Number,
    required: true,
  },
  product_description_lenght: {
    type: Number,
    required: true,
  },
  product_photos_qty: {
    type: Number,
    required: true,
  },
  product_weight_g: {
    type: Number,
    required: true,
  },
  product_length_cm: {
    type: Number,
    required: true,
  },
  product_height_cm: {
    type: Number,
    required: true,
  },
  product_width_cm:  {
    type: Number,
    required: true,
  },
});

productsSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

productsSchema.set("toJSON", {
  virtuals: true,
});

export const Products = model<Product>("Products", productsSchema);
