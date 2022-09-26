import { ApiProperty } from "@nestjs/swagger";

export class CreateLoginDto {

    @ApiProperty({nullable: true})
    Email: string

    @ApiProperty({nullable: true})
    Password: string
}
