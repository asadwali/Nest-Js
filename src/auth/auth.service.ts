import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity'
@Injectable()
export class AuthService {
 
  constructor(
    @InjectRepository(User)
    private userService: Repository<User>,
  )
  {

  }

  async validateUser(Email: string, Password: string): Promise<any> {
    const user = await this.userService.findOne({where: {Email: Email} }); 
    if (user) {
     
      if (user.Email == null) {
        throw new HttpException('This account is not Found, please contact your Admin.', HttpStatus.NOT_FOUND);
      }       
      const isPassMatch = await bcrypt.compare(Password, user.Password)
      if (isPassMatch) {
        const { Password, ...result } = user;

        return Email;
      }
      else {
        throw new HttpException("Password doesn't match against user " + user.Email, HttpStatus.NOT_FOUND);
      }
    }
    else {
      throw new HttpException(Email + " user not found.", HttpStatus.NOT_FOUND);
    }
  }
}
