import {
    Controller,
    Get,
  } from '@nestjs/common';
import { CategoryService } from './category.service';
  //for build success
  @Controller('category')
  export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Get()
    async fetchCategories(
    ) {
        const categories = await this.categoryService.getAll()
        return categories
    }

  }
  