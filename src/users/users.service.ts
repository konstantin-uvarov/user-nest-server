import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async getUpdatedUsers() {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const updatedUsers = await this.userModel.find({
      updated_at: { $gte: startOfToday },
    });
    return updatedUsers;
  }

  async getAllUsers() {
    const users = await this.userModel.find({});
    return users;
  }

  async insertUser(userData: any) {
    const user = new this.userModel(userData);
    await user.save();
    return user;
  }

  async updateUser(id: string, userData: any) {
    const user = await this.userModel.findByIdAndUpdate(id, userData, {
      new: true,
    });
    return user;
  }

  async deleteUser(id: string) {
    await this.userModel.findByIdAndDelete(id);
  }
}
