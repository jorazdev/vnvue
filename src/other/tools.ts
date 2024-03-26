export class toolsService {

    getSql(table: string, words: string, column: string){
        
        const searchs = words.trim().replace(/\s+/g, " ").split(" ")
  
        let sql = ''
        let k = 1
        searchs.forEach(search => {
            if(search != ''){
                if(k == searchs.length){
                    sql += `${table}.${column} like '%${search}%'`
                }else {
                    sql += `${table}.${column} like '%${search}%' and `
                }
            }
            k++
        })
         return sql
    }
}