import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    url: { type: String, default: '' },
    id: { type: mongoose.Schema.Types.ObjectId},
    discount:{type:Number},
    price:{type:Number}
  },
  { timestamps: true },
);

