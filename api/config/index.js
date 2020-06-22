const metadata = {
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.NODE_ENV === 'development' ? 'khajana_dev_khajana' : 'khajana_khajana',
  dateStrings: true,
  acquireTimeout: 5000,
  connectionLimit: process.env.DB_POOL_SIZE,
};
const standbyMetadata = {
  port: 3306,
  minimumIdle: 0,
};

module.exports = {
  mysql0: {
    host: 'localhost',
    port: process.env.DB_PORT || 3306,
    ...metadata,
  },
  mysql1: {
    host: 'db1.khalis.net',
    ...metadata,
    ...standbyMetadata,
  },
  mysql2: {
    host: 'db2.khalis.net',
    ...metadata,
    ...standbyMetadata,
  },
  mysql3: {
    host: 'db3.khalis.net',
    ...metadata,
    ...standbyMetadata,
  },
};
