import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany} from "typeorm";
import {Profile} from "../../profile/entities/profile.entity";
import { Order } from '../../orders/entities/order.entity'
@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    Personid: number;

    @Column({nullable: true})
    Name: String;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;


    @OneToMany(() => Order, orders => orders.person)
    @JoinColumn()
    orders: Order[];

}