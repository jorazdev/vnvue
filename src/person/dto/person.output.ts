import { ObjectType, Int, Field } from '@nestjs/graphql';


@ObjectType()
export class PersonOuput{

  @Field()
  id: number 
  
  @Field()
  firstName: string 
  
  @Field()
  lastName: string
  
  @Field()
  contact: string

}
