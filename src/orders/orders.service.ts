import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/person/entities/person.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {

  constructor(

    @InjectRepository(Order)
    private orderService: Repository<Order>,

    @InjectRepository(Person)
    private personService: Repository<Person>,
  )
  {

  }
  async create(createOrderDto: CreateOrderDto) {
    let that = this;

    const person = new Person();   
    person.Personid = createOrderDto.Personid;
    const newProfile = await that.personService.save(person);

    const userOrder = new Order(); 
    // Object.assign(userOrder, createOrderDto);  
    userOrder.OrderDetails = createOrderDto.OrderDetails;
    userOrder.ShipmentAddress = createOrderDto.ShipmentAddress;
    userOrder.Cost = createOrderDto.Cost;
    userOrder.person = newProfile;
    return await that.orderService.save(userOrder);
  }

  async findAll() {
    return await this.orderService.find({
      relations: ['person']}
     )    
  }

  async findOne(id: number) {
    const order = await this.orderService.findOne({
      relations: ['person'], where: {OrderId: id}})     // Find user by id in One-to-One Relation
      Object.assign(order, id);
      if(!order){
        throw new HttpException("Order is not Found.", HttpStatus.NOT_FOUND);
      }
      return order;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
