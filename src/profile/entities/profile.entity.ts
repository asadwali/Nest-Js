import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    Gender: String;

    @Column({nullable: true})
    Age: String;

}