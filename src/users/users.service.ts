import { HttpException, HttpStatus, Inject, Injectable  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(User)
    private userService: Repository<User>,
  )
  {

  }
  
  async create(createUserDto: CreateUserDto) {
    let that = this;

    if (createUserDto.Confirm_Password !== createUserDto.Password) {
      throw new HttpException('Password does not matched.', HttpStatus.NOT_FOUND);
    }

    const saltOrRounds = 10;
    const entity = new User();
    entity.Email = createUserDto.Email;
    entity.Frist_Name = createUserDto.First_Name;
    entity.Last_Name = createUserDto.Last_Name;
    entity.Password = await bcrypt.hash(createUserDto.Password.toString(), saltOrRounds);
    entity.Confirm_Password = createUserDto.Confirm_Password;
    entity.PhoneNumber = createUserDto.PhoneNumber;
    entity.DateOfBirth = createUserDto.DateOfBirth;

    return await that.userService.save(entity);
  }

  async findAll() {
    return await this.userService.find()
  }

  async findOne(id: string) {
    const user = await this.userService.findOne(+id);
    if(!user){
      throw new HttpException("User not found.", HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let that=this;
    const saltOrRounds = 10;
    const entity = await this.userService.findOne(id);
    Object.assign(entity, updateUserDto);
    entity.Password = await bcrypt.hash(updateUserDto.Password.toString(), saltOrRounds);
    return await that.userService.save(entity);
   
  }

  async remove(id: number) {
    return await this.userService.delete(id);
  }
}
