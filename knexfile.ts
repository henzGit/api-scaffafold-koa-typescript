import * as config from 'config';

module.exports = {
  local: {
    client: 'mysql',
    connection: {
      host : config.get('App.db.host'),
      user : config.get('App.db.user'),
      password : config.get('App.db.password'),
      database : config.get('App.db.database')
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  development: {
    client: 'mysql',
    connection: {
      host : config.get('App.db.host'),
      user : config.get('App.db.user'),
      password : config.get('App.db.password'),
      database : config.get('App.db.database')
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host : config.get('App.db.host'),
      user : config.get('App.db.user'),
      password : config.get('App.db.password'),
      database : config.get('App.db.database')
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host : config.get('App.db.host'),
      user : config.get('App.db.user'),
      password : config.get('App.db.password'),
      database : config.get('App.db.database')
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};