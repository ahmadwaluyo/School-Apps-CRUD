const connect = require("../config/connection");

class Subjects {
    static display(search, callback) {
        const query = `SELECT * FROM "Subjects" 
        WHERE subject_name LIKE $1 ORDER BY id;`;
        const values = [search];

        connect.query(query,values, (err, res) => {
            if(err) {
                callback(err, null);
            } else {
                callback(null, res.rows);
            }
        });
    }

    static subjectsGetData(id, callback) {
        const query = `
        SELECT *
        FROM "Subjects"
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

    static post(subject_name, callback) {
        const text = `
        INSERT INTO "Subjects"(subject_name) VALUES($1)`;
        const values = [subject_name];
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
        UPDATE "Subjects"
        SET subject_name = $2
        WHERE id = $1;
        `;
        const values = [data.id, data.subject_name];
        connect.query(text, values, (err, res) => {
            if(err) {
                callback(err, null);
            } else {
                callback(null, res);
            }
        })
    }

    static delete(id, callback) {
        const text =`
        DELETE FROM "Subjects"
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

module.exports = Subjects;