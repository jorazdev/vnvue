import { Field, ObjectType } from "@nestjs/graphql";
import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
export class Timestamp {
    @CreateDateColumn({
        update: false,
        nullable: true
    })
    @Field()
    created: Date;

    @UpdateDateColumn({
        nullable: true
    })
    @Field()
    updated: Date;

    @DeleteDateColumn({
        nullable: true
    })
    @Field()
    deleted: Date;
}