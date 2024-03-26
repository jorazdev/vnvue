import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonResolver } from './person.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/entity/person';
import { toolsService } from 'src/other/tools';

@Module({
  imports: [
    TypeOrmModule.forFeature([Person]),
  ],
  providers: [PersonResolver, PersonService, toolsService],
})
export class PersonModule {}
