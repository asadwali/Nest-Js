import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from '../person/entities/person.entity'
import { Profile } from './entities/profile.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Person, Profile])],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
