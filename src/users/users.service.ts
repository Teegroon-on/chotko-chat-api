import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDocument, User } from './schemas/user.schema';
import { UpdateUserDto } from './dto/upadate-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getById(id: number): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const newProduct = new this.userModel(userDto);
    return newProduct.save();
  }

  async remove(id: number): Promise<User> {
    return this.userModel.findByIdAndRemove(id);
  }

  async update(id: number, userDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, userDto, { new: true });
  }
}
