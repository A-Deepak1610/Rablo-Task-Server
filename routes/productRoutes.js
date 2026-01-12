import express from "express";
import {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  getProductsByPrice,
  getProductsByRating,
} from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// All routes are protected
router.use(protect);

// CRUD operations
router.post("/", addProduct);
router.get("/", getAllProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

// Special queries
router.get("/featured", getFeaturedProducts);
router.get("/price/:maxPrice", getProductsByPrice);
router.get("/rating/:minRating", getProductsByRating);

export default router;
