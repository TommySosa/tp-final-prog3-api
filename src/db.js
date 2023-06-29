import {createPool} from 'mysql2/promise'

// export const pool = createPool({
//  host: 'localhost', //ip
//  user: 'root',
//  password: '',
//  port: 3306,
//  database: 'companydb'

// })
export const pool = createPool({
    host: 'localhost', //ip
    user: 'root',
    password: '',
    port: 3306,
    database: 'tablafutbolprog3'
})