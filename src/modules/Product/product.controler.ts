import {
    Controller,
    Get,
  } from '@nestjs/common';
import { ProductService } from './product.service';
  //for build success
  @Controller('product')
  export class ProductController {
    constructor(private productService: ProductService) { }

    @Get()
    async fetchProduct(
    ) {
        const products = await this.productService.getAll()
        return products
    }

  }
  