const pool = require("./connection");

const dbSekolah2 = `
    CREATE TABLE "Students"(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        birth_date VARCHAR(50) NOT NULL,
        gender VARCHAR(10) NOT NULL
    );

    CREATE TABLE "Teachers"(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        gender VARCHAR(10) NOT NULL
    );

    CREATE TABLE "Subjects"(
        id SERIAL PRIMARY KEY,
        subject_name VARCHAR(20)
    );`;

pool.query(dbSekolah2, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`Successfully added table to database`);
    }
});