import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { TypeOrmModule } from '@nestjs/typeorm';
import  entities  from './entity'
import * as dotenv from 'dotenv';
dotenv.config()

import { PersonModule } from './person/person.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      driver: ApolloDriver,
     }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../public/build'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(<string>process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: entities,
      synchronize: true,
      autoLoadEntities: true
    }),
    PersonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
