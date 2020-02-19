const Students = require("../model/students");

class ControllerStudents {
    static students(req, res) {
        let notifSuccess = req.app.locals.successMessage;
        delete req.app.locals.successMessage;
        let search = req.query.search || '';
        search = `%${search}%`
        Students.display(search, (err, data) => {
            if(err) {
                res.send(err);
            } else {
                res.render('students', { data : data, errors: null,  notifSuccess });
            }
        });
    }

    static get(req, res) {
        res.render('addStudents', { errors : null });
    }

    static post(req, res) {
        let { first_name , last_name, email, birth_date, gender } = req.body;
        let errors = [];
        if(first_name.length < 3) {
            errors.push(`First Name should be more than atleast 3 characters!`)
        }

        if(gender.length < 2) {
            errors.push(`Gender must be filled !`);
        }

        if(errors.length > 0) {
            res.render('addStudents', { errors : errors });
        } else {
            Students.post(first_name , last_name, email, birth_date, gender, function(err, data) {
                if(err) {
                    res.send(err);
                } else {
                    let addSuccess = `Success added to table Students`;
                    req.app.locals.successMessage = addSuccess;
                    res.redirect('/students');
                }
            });
        }

    }


    static studentsData(email,res) {
        Students.studentsGetData(email, (err, data) => {
            if(err) {
                res.send(err);
            } else {
                res.send(data);
            }
        })
    }

    static getEdit(req, res) {
        let id = req.params.id;
        Students.studentsGetDataById(id, function(err, data) {
            if(err) {
                res.send(err);
            } else {
                res.render('editStudents', {
                    errors : null,
                    student : data[0]
                });
            }
        });
    }

    static postEdit(req, res) {
        let { first_name, last_name, email, birth_date, gender } = req.body;
        let data = {
            id: Number(req.params.id),
            first_name,
            last_name,
            email,
            birth_date,
            gender
        }
        Students.postEdit(data, (err, result) => {
            if(err) {
                res.send(err);
            } else {
                let editSuccess = `Success edit to table Students`;
                req.app.locals.successMessage = editSuccess;
                res.redirect('/students');
            }
        })
    }

    static delete(req, res) {
        let id = req.params.id;
        Students.delete(id, (err, data) => {
            if(err) {
                res.send(err);
            } else {
                let deleteSuccess = `Success deleted from table Students`;
                req.app.locals.successMessage = deleteSuccess;
                res.redirect('/students');
            }
        });
    }
}

module.exports = ControllerStudents;