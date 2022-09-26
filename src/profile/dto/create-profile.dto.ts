import { ApiProperty } from "@nestjs/swagger";

export class CreateProfileDto {

    @ApiProperty({nullable: true})
    Gender: String

    @ApiProperty({nullable: true})
    Age: String
}
