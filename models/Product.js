import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: [true, "Product ID is required"],
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: mongoose.Types.Decimal128,
      default: 0,
      min: [0, "Rating cannot be less than 0"],
      max: [5, "Rating cannot be more than 5"],
      get: (v) => (v ? parseFloat(v.toString()) : 0),
    },
    createdAt: {
      type: Date,
      required: [true, "Created date is required"],
      default: Date.now,
    },
    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
