import gql from 'graphql-tag'

export const UPDATE_PERSON_MUTATION = gql`
    mutation updatePerson($personInput: PersonInput!, $rowsPerPage: Float!) {
        updatePerson(personInput: $personInput, rowsPerPage: $rowsPerPage){
            person {
                id,
                lastName,
                firstName,
                contact
            },
            pagesNumber
        }
    }
`

export const ALL_PERSON_QUERY = gql`
    query findAllPerson($pageOption: PageOption!) {
        findAllPerson(pageOption: $pageOption) {
            meta {page, rowsNumber, rowsPerPage,pagesNumber, hasNextPage, hasPreviousPage, rowsPerPageOptions}, 
            persons {id, lastName, firstName, contact}
        }
    }
`