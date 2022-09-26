import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Person } from '../person/entities/person.entity'
import { Order } from './entities/order.entity' 
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Person, Order])],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
