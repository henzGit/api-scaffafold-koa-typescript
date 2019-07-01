import * as Knex from 'knex';
import * as config from "config";

const connection: Knex = Knex(
    {
        client: 'mysql',
        connection: {
          host : config.get('App.db.host'),
          user : config.get('App.db.user'),
          password : config.get('App.db.password'),
          database : config.get('App.db.database')
        }
      }
);
  
export default connection;
