import { PartialType } from '@nestjs/swagger';
import { CreatePersonDto } from './create-person.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {

    @ApiProperty({nullable: true})
    Name: String
    
    @ApiProperty({nullable: true})
    Gender: String

    @ApiProperty({nullable: true})
    Age: String

    // @ApiProperty({nullable: true})
    // OrderDetails: String

    // @ApiProperty({nullable: true})
    // ShipmentAddress: String

    // @ApiProperty({nullable: true})
    // Cost: String

}
