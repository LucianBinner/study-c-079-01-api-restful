import Mongoose from 'mongoose';

const ProductSchema = new Mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    price: { type: Number, require: true, unique: false },
    quantity: { type: Number, require: true, unique: false },
  },
  { timestamps: true },
);

const ProductModel = Mongoose.model('Product', ProductSchema, 'Product');

export default ProductModel;
