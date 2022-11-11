import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

let userState = [];

@Injectable()
export class UserService {


  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10)
    }

    console.log(data)
    userState.push(data);
    console.log(userState)

    return {
      ...userState,
      password: undefined,
    };
  }

  findByEmail(email: string) {
    const findOne = userState.find(item=>item.email == email);
    return findOne;
  }
}
