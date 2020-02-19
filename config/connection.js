const { Pool } = require("pg");

const dbSekolah2 = new Pool({
    host : "localhost",
    database : "db_sekolah2",
    user: "postgres",
    password: "123456",
    port: 5432
})

module.exports = dbSekolah2;