import * as mysql from 'mysql2';
import * as dotenv from 'dotenv';
import * as util from "util";

dotenv.config();

const mySqlConnection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
})

mySqlConnection.query = util.promisify(mySqlConnection.query).bind(mySqlConnection);

mySqlConnection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
});

export default mySqlConnection;