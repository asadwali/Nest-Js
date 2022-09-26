import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity'
import { Profile } from '../profile/entities/profile.entity'
import { Order } from '../orders/entities/order.entity'
@Module({
  imports: [TypeOrmModule.forFeature([Person, Profile, Order])],
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule {}
