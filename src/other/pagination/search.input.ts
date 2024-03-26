import { InputType, Int, Field } from '@nestjs/graphql'
import { IsOptional, IsNotEmpty, IsString, IsNumber } from 'class-validator'

@InputType()
export class SearchInput {

    @IsNotEmpty()
    @Field()
    table: string

    @IsNotEmpty()
    @Field()
    column: string

    @Field()
    @IsNotEmpty()
    search: string
}