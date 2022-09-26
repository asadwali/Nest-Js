import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
    @ApiProperty({nullable: true})
    First_Name: String

    @ApiProperty({nullable: true})
    Last_Name: String

    @ApiProperty({nullable: true})
    Email: String

    @ApiProperty({nullable: true})
    Password: String

    @ApiProperty({nullable: true})
    Confirm_Password: String

    @ApiProperty({nullable: true})
    PhoneNumber: number

    @ApiProperty({nullable: true, type: 'datetime' })
    DateOfBirth: Date;
}
