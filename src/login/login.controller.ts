import { Controller, Post, Body, Inject } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { AuthService } from '../auth/auth.service';

@Controller('login')
export class LoginController {

  constructor( private readonly authService: AuthService) {}


  @Post()
  async login(@Body() createLoginDto: CreateLoginDto) {
    const user = await this.authService.validateUser(createLoginDto.Email, createLoginDto.Password);
    return user;
  }
}
