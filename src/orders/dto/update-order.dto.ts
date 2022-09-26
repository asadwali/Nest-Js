import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { ApiProperty } from "@nestjs/swagger";

export class UpdateOrderDto extends PartialType(CreateOrderDto) {

    @ApiProperty({nullable: true})
    OrderDetails: String

    @ApiProperty({nullable: true})
    ShipmentAddress: String

    @ApiProperty({nullable: true})
    Cost: String

}
