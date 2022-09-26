import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    UserId: number

    @Column({nullable: true})
    Frist_Name: String

    @Column({nullable: true})
    Last_Name: String

    @Column({nullable: true,  length: 20 } )
    Email: String

    @Column({nullable: true})
    Password: String

    @Column({nullable: true})
    Confirm_Password: String

    @Column({nullable: true})
    PhoneNumber: number

    @Column({nullable: true, type: 'datetime' })
    DateOfBirth: Date;

    @CreateDateColumn({ name: 'created_date'})
    createdDate!: Date;

    @UpdateDateColumn({ name: 'updated_date'})
    UpdatedDate!: Date;
}

