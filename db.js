import pg from 'pg'

const pool = new pg.Pool({
  user: 'postgres',
  password: 'anatoliy23042394',
  host: 'localhost',
  port: 5432,
  database: 'node_postgres'
})

export default pool
