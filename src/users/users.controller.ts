import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { ValidateObjectId } from './validate-object-id.pipe';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('getUpdatedUsers')
  getUpdatedUsers() {
    return this.usersService.getUpdatedUsers();
  }

  @Get('getAllUsers')
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Post('insertUser')
  insertUser(@Body() user: CreateUserDto) {
    return this.usersService.insertUser(user);
  }

  @Put('updateUser/:id')
  updateUser(
    @Param('id', new ValidateObjectId()) id: string,
    @Body() user: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, user);
  }

  @Delete('deleteUser/:id')
  deleteUser(@Param('id', new ValidateObjectId()) id: string) {
    return this.usersService.deleteUser(id);
  }
}
