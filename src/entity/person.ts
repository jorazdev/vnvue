import { Timestamp } from "src/entity/timestamp";
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Person extends Timestamp{
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column({
        nullable: false,
        default: ''
    })
    @Field()
    firstName: string

    @Column({
        nullable: false,
        default: ''
    })
    @Field()
    lastName: string

    @Column({
        nullable: true,
        default: ''
    })
    @Field()
    contact: string
}