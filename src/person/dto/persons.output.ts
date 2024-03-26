import { PageMeta } from "src/other/pagination/pageMeta.output";
import { PersonOuput } from "./person.output";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Persons {

    @Field(type => [PersonOuput])
    persons: PersonOuput[]

    @Field()
    meta: PageMeta
}