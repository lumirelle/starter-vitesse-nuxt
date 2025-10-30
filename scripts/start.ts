import open from 'open'
import { DEV_SERVER_OPEN_HOST, DEV_SERVER_PORT } from '../app/constants/dev-server.js'

await open(`http://${DEV_SERVER_OPEN_HOST}:${DEV_SERVER_PORT}`)
