import { model, Schema } from "mongoose";

const colllection = "Carts";

const schema = new Schema(
  {
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "Clients",
      required: true,
      index: true,
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Products",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

const CartModel = model(colllection, schema);
export default CartModel;
