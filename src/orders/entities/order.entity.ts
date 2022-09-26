import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from "typeorm";
import { Person } from '../../person/entities/person.entity'
@Entity()

export class Order {

    @PrimaryGeneratedColumn()
    OrderId: number;

    @Column({nullable: true})
    OrderDetails: String;

    @Column({nullable: true})
    ShipmentAddress: String;
    
    @Column({nullable: true})
    Cost: String;

    @ManyToOne(() => Person, person => person.orders)
    @JoinColumn()
    person: Person;
}
