const connect = require("../config/connection");

class Students {
    static display(search, callback) {
        const query = `SELECT * FROM "Students" 
        WHERE first_name LIKE $1 ORDER BY id;`;
        const values = [search];
        
        connect.query(query, values, (err, res) => {
            if(err) {
                callback(err, null);
            } else {
                callback(null, res.rows);
            }
        });
    }

    static studentsGetData(email, callback) {
        const query = `
        SELECT *
        FROM "Students"
        WHERE email = '${email}';
        `;

        connect.query(query, (err, res) => {
            if(err) {
                callback(err, null);
            } else {
                callback(null, res.rows);
            }
        });
    }

    static studentsGetDataById(id, callback) {
        const query = `
        SELECT *
        FROM "Students"
        WHERE id = '${id}';
        `;

        connect.query(query, (err, res) => {
            if(err) {
                callback(err, null);
            } else {
                callback(null, res.rows);
            }
        });
    }
    
    static post(first_name, last_name, email, birth_date, gender, callback) {
        const text = `
        INSERT INTO "Students"(first_name, last_name, email, birth_date, gender) VALUES($1, $2, $3, $4, $5)`;
        const values = [first_name, last_name, email, birth_date, gender];
        connect.query(text, values, (err, res) => {
            if(err) {
                callback(err, null);
            } else {
                callback(null, res);
            }
        });
    }

    static postEdit(data, callback) {
        const text =`
        UPDATE "Students"
        SET first_name = $2,
        last_name = $3,
        email = $4,
        birth_date = $5,
        gender = $6
        WHERE id = $1;
        `;
        const values = [data.id, data.first_name, data.last_name, data.email, data.birth_date, data.gender];

        connect.query(text, values, (err, res) => {
            if(err) {
                callback(err);
            } else {
                callback(null, res);
            }
        })
    }

    static delete(id, callback) {
        const text = `
        DELETE FROM "Students"
        WHERE id = $1;
        `;
        const values = [id];
        connect.query(text, values, (err, data) => {
            if(err) {
                callback(err);
            } else {
                callback(null, data);
            }
        });
    }
}

module.exports = Students;