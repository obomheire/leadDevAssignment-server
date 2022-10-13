import { Schema, model } from "mongoose";
import { OrderItem } from "../utils/interfaces";

const orderItemsSchema = new Schema<OrderItem>({
  order_id: {
    type: String,
    required: true,
  },
  order_item_id: {
    type: String,
    required: true,
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: "Products",
  },
  seller_id: {
    type: Schema.Types.ObjectId,
    ref: "Selers",
  },
  shipping_limit_date: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  freight_value: {
    type: Number,
    required: true,
  },
});

orderItemsSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

orderItemsSchema.set("toJSON", {
  virtuals: true,
});


export const OrderItems = model<OrderItem>("OrderItems", orderItemsSchema);
