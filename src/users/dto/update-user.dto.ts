import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @ApiProperty({nullable: true})
    First_Name: String

    @ApiProperty({nullable: true})
    Last_Name: String

    @ApiProperty({nullable: true})
    Email: String

    @ApiProperty({nullable: true})
    Password: String

    @ApiProperty({nullable: true})
    Confirm_Password: string

    @ApiProperty({nullable: true})
    PhoneNumber: number

    @ApiProperty({nullable: true, type: 'datetime' })
    DateOfBirth: Date;
}
