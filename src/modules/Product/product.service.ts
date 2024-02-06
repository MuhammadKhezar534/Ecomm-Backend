import { Injectable, NotFoundException } from "@nestjs/common";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {  Product } from "./product.interface";

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }
    async getAll(): Promise<any> {
      const products = await this.productModel.find().exec()
      if (!products) {
        throw new NotFoundException('No products.')
    }
      return products
  }
  }