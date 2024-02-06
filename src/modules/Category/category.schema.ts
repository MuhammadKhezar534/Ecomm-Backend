import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, default: '' },
    id: { type: mongoose.Schema.Types.ObjectId},
  },
  { timestamps: true },
);

