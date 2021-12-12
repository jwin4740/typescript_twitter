import {ConnectionOptions} from 'typeorm'
import {Tweet} from '../models/tweet'

const config : ConnectionOptions = {
  type: "mysql",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 3306,
  username: process.env.POSTGRES_USER || "twitter_api",
  password: process.env.POSTGRES_PASSWORD || "localhost",
  database: process.env.POSTGRES_DB || "py_twitter",
  entities: [Tweet],
  synchronize: true,
}

export default config