import { InputType, Int, Field } from '@nestjs/graphql';
import { IsOptional, IsNotEmpty, IsString, IsNumber } from 'class-validator'

@InputType()
export class PersonInput {
  
  @IsNumber()
  @Field()
  id: number

  @IsString()
  @Field()
  firstName: string 
  
  @IsString()
  @Field()
  lastName: string
  
  @IsString()
  @Field()
  contact: string
}