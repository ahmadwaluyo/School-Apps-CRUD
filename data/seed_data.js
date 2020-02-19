const pool = require("../config/connection");
const fs = require("fs");

function parseStudents() {
    fs.readFile("../data/students.json","utf8",function(err,data){
        if(err) {
            console.log(err, null);
        } else {
            data = JSON.parse(data);
            for (let i = 0; i < data.length; i++) {
                let first_name = data[i].first_name;
                let last_name = data[i].last_name;
                let email = data[i].email;
                let birth_date = data[i].birthdate;
                let gender = data[i].gender;

                const text =`INSERT INTO "Students"(first_name, last_name, email, birth_date, gender) VALUES($1, $2, $3, $4, $5) RETURNING *`;
                const values = [first_name, last_name, email, birth_date, gender];

                pool.query(text, values, (err, res) => {
                    if(err) {
                        console.log(err.stack);
                    } else {
                        console.log(`Successfully added data on Students table\n\n`,res.rows[0]);
                    }
                });
            }
        }
    });
}

function parseTeachers() {
    fs.readFile("../data/teachers.json","utf8", function(err,data) {
        if(err) {
            console.log(err, null);
        } else {
            data = JSON.parse(data);
            for (let i = 0; i < data.length; i++) {
                let first_name = data[i].first_name;
                let last_name = data[i].last_name;
                let email = data[i].email;
                let gender = data[i].gender;

                const text = `INSERT INTO "Teachers"(first_name, last_name, email, gender) VALUES($1, $2, $3, $4) RETURNING *`;
                const values = [first_name, last_name, email, gender];

                pool.query(text, values, (err, res) => {
                    if(err) {
                        console.log(err.stack);
                    } else {
                        console.log(`Successfully added data on Teachers table\n\n`,res.rows[0]);
                    }
                })
            }
        }
    })
}

function parseSubjects() {
    fs.readFile("../data/subjects.json","utf8",function(err, data){
        if(err) {
            console.log(err, null);
        } else {
            data = JSON.parse(data);
            for (let i = 0; i < data.length; i++) {
                let subject_name = data[i].subject_name;

                const text = `INSERT INTO "Subjects"(subject_name) VALUES($1) RETURNING *`;
                const query = [subject_name];

                pool.query(text, query, (err, res) => {
                    if(err) {
                        console.log(err.stack);
                    } else {
                        console.log(`Successfully added data on Subjects\nDetail: `,res.rows[0]);
                    }
                })
            }
        }
    })
}

parseStudents()
parseTeachers()
parseSubjects() 