import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity'
import { Profile } from '../profile/entities/profile.entity'
import { Order } from 'src/orders/entities/order.entity';
@Injectable()
export class PersonService {

  constructor(

    @InjectRepository(Person)
    private personService: Repository<Person>,

    @InjectRepository(Profile)
    private profileService: Repository<Profile>,

    @InjectRepository(Order)
    private orderService: Repository<Order>,
  )
  {

  }

  async create(createPersonDto: CreatePersonDto) {
    let that = this;

    const profileuser = new Profile();    // one-to-one relation with person table
    profileuser.Age = createPersonDto.Age;
    profileuser.Gender = createPersonDto.Gender;
    const newProfile = await that.profileService.save(profileuser);

    // const orders = new Array<Order>();
    // const userOrders = new Order();
    // userOrders.OrderDetails = createPersonDto.OrderDetails;
    // userOrders.ShipmentAddress = createPersonDto.ShipmentAddress;
    // userOrders.Cost = createPersonDto.Cost;
    // const newOrder = await that.orderService.save(userOrders);
    // orders.push(newOrder);

        const user = new Person();
        user.Name = createPersonDto.Name;
        user.profile = newProfile;
        // user.orders = orders;
        return await that.personService.save(user);
  }

  async findAll() {
     return await this.personService.find({
      relations: ['profile', 'orders']}
     )    
  }

  async findOne(id: number) {
    const person = await this.personService.findOne({
    relations: ['profile', 'orders'], where: {Personid: id}})     // Find user by id in One-to-One Relation
    Object.assign(person, id);
    if(!person){
      throw new HttpException("User not found.", HttpStatus.NOT_FOUND);
    }
    return person;
   }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    let that=this;
    const entity = await this.personService.findOne(id);
    Object.assign(entity, updatePersonDto);
    return await that.personService.save(entity);
  }

  async remove(id: number) {
    return await this.personService.delete(id);
  }
}
