import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PersonService } from './person.service';
import { Person } from '../entity/person';
import { PersonInput } from './dto/person.input';
import { PageOption } from 'src/other/pagination/pageOption.input';
import { Persons } from './dto/persons.output';
import { UpdatePersons } from './dto/updatePerson.output';


@Resolver(() => Person)
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Query(() => Persons)
  async findAllPerson(@Args('pageOption') pageOption: PageOption) {
    return await this.personService.findAll(pageOption);
  }

  
  @Mutation(() => UpdatePersons)
  updatePerson(
    @Args('personInput') personInput: PersonInput, 
    @Args('rowsPerPage') rowsPerPage: number) {
    return this.personService.update(personInput, rowsPerPage);
  }

}
