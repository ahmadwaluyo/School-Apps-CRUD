const connect = require("../config/connection");

class Teachers {
    static display(search, callback) {
        const query = `SELECT * FROM "Teachers" 
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

    static teachersGetData(id, callback) {
        const query = `
        SELECT *
        FROM "Teachers"
        WHERE id = '${id}';
        `;

        connect.query(query, (err, res) => {
            if(err) {
                callback(err, null);
            } else {
                callback(null, res.rows)
            }
        });
    }

    static post(first_name, last_name, email, gender, callback) {
        const text = `
        INSERT INTO "Teachers"(first_name, last_name, email, gender) VALUES($1, $2, $3, $4)`;
        const values = [first_name, last_name, email, gender];
        connect.query(text, values, (err, res) => {
            if(err) {
                callback(err, null);
            } else {
                callback(null, res);
            }
        });
    }

    static postEdit(data, callback) {
        const text = `
        UPDATE "Teachers"
        SET first_name = $2,
        last_name = $3,
        email = $4,
        gender = $5
        WHERE id = $1;
        `;
        const values = [data.id, data.first_name, data.last_name, data.email, data.gender];
        connect.query(text, values, (err, res) => {
            if(err) {
                callback(err, null);
            } else {
                callback(null, res);
            }
        });
    }

    static delete(id, callback) {
        const text = `
        DELETE FROM "Teachers"
        WHERE id = $1;
        `;
        const values = [id];
        connect.query(text, values, (err, data) => {
            if(err) {
                callback(err);
            } else {
                callback(null, data);
            }
        })
    }
}

module.exports = Teachers;