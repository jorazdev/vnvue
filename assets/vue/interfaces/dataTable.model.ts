import { IMeta } from "./pagination.model"

export interface IDataTableProps {
    title: string
    rows: any[]
    columns: any[]
    rowKey?: string
    rowsNumber: number
    rowsPerPage: number
}

export interface BottomDataTableProps {
  selected: any[]
  rowsNumber: number
  rowsPerPage: number
}

export interface IColumnSearch {
  name: string
  type: string
}

export interface ISearch {
  column: string
  search: string
  table: string
}

export interface TopDataTableProps {
  selected: any[],
  title: string
}

export interface IItemDataTableProps {
  props: any
}