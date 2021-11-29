const path = require('path');
const envConfig = require('dotenv').config({
  path: path.resolve(__dirname, `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}`),
})

function env(key) {
  console.log({key})
  return envConfig.parsed[key] || process.env[key]
}

export default {
  type: "postgres",
  host: "db",
  port: 3001,
  username: "postgres",
  password: "postgres",
  database: env('DB_DATABASE'),
  autoLoadEntities: true,
  synchronize: true
}