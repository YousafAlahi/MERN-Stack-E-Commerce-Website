

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    oldPrice: {
      type: Number,
      default: null,
    },

    category: {
      type: String,
      required: true,
      enum: ["boski", "kurtas", "shawls"],
    },

    image: {
      type: String,
      required: true,
    },

    badge: {
      type: String,
      default: "",
    },

    stock: {
      type: Number,
      default: 10,
      min: 0,
    },

    sizes: {
      type: [String],
      default: ["S", "M", "L", "XL", "XXL"],
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
