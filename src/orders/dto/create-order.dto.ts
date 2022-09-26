import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {

    @ApiProperty({nullable: true})
    OrderDetails: String

    @ApiProperty({nullable: true})
    ShipmentAddress: String

    @ApiProperty({nullable: true})
    Cost: String

    @ApiProperty({nullable: true})
    Personid: number;



}
