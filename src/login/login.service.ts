import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { User } from '../users/entities/user.entity'
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
 

  constructor(
   
    @InjectRepository(User)
    private UserService: Repository<User>,
  )
  {

  }

  async create(createLoginDto: CreateLoginDto) {
    let that = this;

    const saltOrRounds = 10;
    const entity = new User();
    entity.Email = createLoginDto.Email;
    entity.Password = await bcrypt.hash(createLoginDto.Password.toString(), saltOrRounds);


    return await that.UserService.save(entity);
  }

}
