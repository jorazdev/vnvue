import { PersonOuput } from "./person.output";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UpdatePersons {

    @Field(type => PersonOuput)
    person: PersonOuput

    @Field()
    pagesNumber: number
}