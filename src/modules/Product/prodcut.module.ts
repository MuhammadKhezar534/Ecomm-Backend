import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controler';
import { ProductService } from './product.service';
import { ProductSchema } from './product.schema';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])],
    controllers: [ProductController],
    providers: [ProductService],
    exports: [ProductService],
})

export class ProductModule { }