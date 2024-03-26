import { Field, InputType } from '@nestjs/graphql'
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator'
import { Order } from './pagination.model'
import { SearchInput } from './search.input'

@InputType()
export class PageOption {

    @IsOptional()
    @IsInt()
    @Min(1)
    @Field({nullable: true})
    readonly page?: number = 1

    @IsOptional()
    @Field({nullable: true})
    readonly rowsPerPage?: number = 5

    @IsOptional()
    @IsEnum(Order)
    @Field({nullable: true})
    readonly order?: Order = Order.ASC

    @IsOptional()
    @Field({nullable: true})
    readonly search?: SearchInput
    
    @IsOptional()
    @Field({nullable: true})
    readonly fieldFilter?: string

    get skyp(): number{
        return (this.page - 1) * this.rowsPerPage
    }
}