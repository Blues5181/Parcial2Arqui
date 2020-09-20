const sql = require("mssql");
const config = require("../config/db")

module.exports = async () => {
    let connection = null
    try {
        connection = await sql.connect(config)    
        console.log("Connection Successful!");
    } catch (error) {
        console.log("Connection Error!", error)
    }
    
    sql.on('error', err => {
        console.log("Sql database connection error ", err);
    })

    return connection;
};