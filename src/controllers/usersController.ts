import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import { Sellers } from "../models/olist_sellers_dataset";
import jwt from "jsonwebtoken";


export const userLogin = async (req: Request, res: Response) => {
  const { seller_id, seller_zip_code_prefix } = req.body;
  const seller = await Sellers.findOne({ seller_id });

  const secret = process.env.secret;

  if (!seller) {
    return res.status(400).json({ success: false, Message: "User not found!" });
  }

  if (seller && seller_zip_code_prefix === seller.seller_zip_code_prefix) {
    const token = jwt.sign(
      {
        sellerId: seller.seller_id,
      },
      <string>secret,
      { expiresIn: "1d" }
    );
    res.status(200).send({ success: true, seller: seller.seller_id, token });
  } else {
    res.status(400).json({ success: false, Message: "Invalid credentials!" });
  }
};
