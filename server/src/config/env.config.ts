import * as dotenv from 'dotenv';
dotenv.config();

export default {
  APP_PORT: process.env.APP_PORT ?? '',
  CONNECTION_STRING: process.env.CONNECTION_STRING ?? '',
}