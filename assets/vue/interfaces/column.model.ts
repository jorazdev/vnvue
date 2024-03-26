export interface IColumn {
    name: string
    label: string
    required?: boolean
    align?: string
    field?: (row: any) => any
    format?: (val: any) => any
    sortable?: boolean
    sort?: (a: any, b: any, rowA: any, rowB: any) => any
    rawSort?: (a: any, b: any, rowA: any, rowB: any) => any
    sortOrder?: string
    style?: string
    classes?: string
    headerStyle?: string
    headerClasses?: string
}