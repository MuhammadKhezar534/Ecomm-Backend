import { Injectable, NotFoundException } from "@nestjs/common";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from "./interface";

@Injectable()
export class CategoryService {
    constructor(@InjectModel('Category') private readonly categoryModel: Model<Category>) { }
    async getAll(): Promise<any> {
      const categories = await this.categoryModel.find().exec()
      if (!categories) {
        throw new NotFoundException('No categories.')
    }
      return categories
  }
  }