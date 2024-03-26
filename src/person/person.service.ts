import { Injectable } from '@nestjs/common';

import { PersonInput } from './dto/person.input'
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/entity/person';
import { Repository } from 'typeorm';
import { PageOption } from 'src/other/pagination/pageOption.input';
import { Persons } from './dto/persons.output';
import { PageMeta } from 'src/other/pagination/pageMeta.output';
import { PersonOuput } from './dto/person.output';
import { UpdatePersons } from './dto/updatePerson.output';
import { toolsService } from 'src/other/tools';

@Injectable()
export class PersonService {
 
  constructor(
    @InjectRepository(Person) private personRepository: Repository<Person>,
    private toolsService: toolsService) {}

  async findAll(pageOption: PageOption): Promise<Persons> {

    const qb = this.personRepository.createQueryBuilder('person')
    const person = qb
    .orderBy('person.id', pageOption.order)

    if(pageOption.search && pageOption.search.search){
      if(pageOption.search.column == 'id'){
        person.andWhere(`person.id = ${pageOption.search.search}`)
      }else {
        const sql = this.toolsService.getSql(pageOption.search.table, pageOption.search.search, pageOption.search.column)
        person.andWhere(sql)
      }
    }

    person.skip(pageOption.skyp)
    person.take(pageOption.rowsPerPage)

    const rowsNumber = await person.getCount()
    const { entities } = await person.getRawAndEntities()
    
    const pageMeta = new PageMeta(pageOption, rowsNumber) 

   
    return {persons: entities, meta: pageMeta}
  }

  async update(personInput: PersonInput, rowsPerPage: number): Promise<UpdatePersons> {

    let person: Person

    if(personInput.id == 0){
      person = this.personRepository.create(personInput)
    }else {
      person = await this.personRepository.findOne({
        where:{ 
          id: personInput.id
        }
      })
    }

    Object.assign(person, personInput)
    person = await this.personRepository.save(person)

    const persons: Person[] = await this.personRepository.find()
    const pagesNumber: number = Math.ceil(persons.length / rowsPerPage)
    
    return { person, pagesNumber }
  }

}
