import 'dotenv/config';
import knex from 'knex';

export default knex({
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: Number(process.env.DB_PORT),
    password: process.env.DB_PASSWORD,
    database: process.env.DB_BASE
    //tabela é a -> products
  }
});
