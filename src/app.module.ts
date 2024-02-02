import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://mopariammover01:2QN9VMvfoCVy1git@cluster0.fwnnd8d.mongodb.net/comm`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }