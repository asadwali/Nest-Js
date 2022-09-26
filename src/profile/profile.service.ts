import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity'
@Injectable()
export class ProfileService {

  constructor(
    @InjectRepository(Profile)
    private profileService: Repository<Profile>,
  )
  {

  }

  create(createProfileDto: CreateProfileDto) {
    return 'This action adds a new profile';
  }

  async findAll() {
    return await this.profileService.find()
  }

  async findOne(id: number) {
    const profile = await this.profileService.findOne(+id);
    if(!profile){
      throw new HttpException("User not found.", HttpStatus.NOT_FOUND);
    }
    return profile;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
