import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

dotenv.config();

const DB_URI = process.env.DB_URI;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const dbOptions = {
  user: DB_USER,
  pass: DB_PASS,
  dbName: DB_NAME,
};

@Module({
  imports: [MongooseModule.forRoot(DB_URI, dbOptions), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
