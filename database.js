import mysql from 'mysql2';
import {config } from './config.js';

const connect = async () => {
   return await mysql.createConnection(config);
   
}
connect()