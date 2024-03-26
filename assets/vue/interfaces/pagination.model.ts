import { ISearch } from "./dataTable.model"

export interface IPageOption {
    page: number
    rowsPerPage: number
    search?: ISearch
}

export interface IMeta {
    page: number
    rowsPerPage: number
    rowsNumber?: number
    pagesNumber?: number
    hasNextPage?: boolean
    hasPreviousPage?: boolean
    rowsPerPageOptions?: number[]
}

