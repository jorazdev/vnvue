import { Field, ObjectType } from "@nestjs/graphql"
import { PageOption } from "./pageOption.input"

@ObjectType()
export class PageMeta {
    @Field()
    readonly page: number

    @Field()
    readonly rowsPerPage: number

    @Field()
    readonly rowsNumber: number

    @Field()
    readonly pagesNumber: number

    @Field()
    readonly hasPreviousPage: boolean

    @Field()
    readonly hasNextPage: boolean

    @Field(() => [Number])
    readonly rowsPerPageOptions: number[]

    constructor(pageOptionInput: PageOption, rowsNumber: number){
        this.page = pageOptionInput.page
        this.rowsPerPage = pageOptionInput.rowsPerPage
        this.rowsNumber = rowsNumber
        this.pagesNumber = Math.ceil(this.rowsNumber / this.rowsPerPage)
        this.hasPreviousPage = this.page > 1
        this.hasNextPage = this.page < this.pagesNumber
        this.rowsPerPageOptions =  [ 3, 7, 10, 15 ]
    }
}