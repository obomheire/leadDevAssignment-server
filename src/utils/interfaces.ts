import { Types } from "mongoose";

export interface OrderItem {
  order_id: string;
  order_item_id: string;
  product_id: Types.ObjectId;
  seller_id: Types.ObjectId;
  shipping_limit_date: Date;
  price: number;
  freight_value: number;
}

export interface Product { 
    product_id: string;
    product_category_name: string;
    product_name_lenght: number;
    product_description_lenght: number;
    product_photos_qty: number;
    product_weight_g: number;
    product_length_cm: number;
    product_height_cm: number;
    product_width_cm: number;
}

export interface Seller { 
    seller_id: string;
    seller_zip_code_prefix: number;
    seller_city: string;
    seller_state: string;
}
