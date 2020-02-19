const Teachers = require("../model/teachers");

class ControllerTeachers {
    static teachers(req, res) {
        let notifSuccess = req.app.locals.successMessage;
        delete req.app.locals.successMessage;
        let search = req.query.search || '';
        search = `%${search}%`
        Teachers.display(search, (err, data) => {
            if(err) {
                res.send(err);
            } else {
                res.render('teachers', { data : data , errors : null, notifSuccess });
            }
        })
    }

    static get(req, res) {
        res.render('addTeachers', {errors : null} );
    }

    static post(req, res) {
        let { first_name, last_name, email, gender } = req.body;
        let errors = [];
        if(first_name.length < 2) {
            errors.push(`First Name must be filled atleast 3 characters !`);
        }

        if(gender.length < 2) {
            errors.push(`Gender must be filled atleast 4 characters`);
        }

        if(errors.length > 0) {
            res.render('addTeachers', { errors : errors });
        } else {
            Teachers.post(first_name, last_name, email, gender, function(err, data) {
                if(err) {
                    res.send(err);
                } else {
                    let addSuccess = `Success added to table Teachers`;
                    req.app.locals.successMessage = addSuccess;
                    res.redirect('/teachers');
                }
            });
        }

    }


    static teachersData(id, res) {
        Teachers.teachersGetData(id, (err, data) => {
            if(err) {
                res.send(err);
            } else {
                res.send(data);
            }
        })
    }

    static getEdit(req, res) {
        let id = req.params.id;
        Teachers.teachersGetData(id, function(err, data) {
            if(err) {
                res.send(err);
            } else {
                res.render('editTeachers', {
                    errors : null,
                    teacher : data[0]
                })
            }
        });
    }

    static postEdit(req, res) {
        let { first_name, last_name, email, gender } = req.body;
        let data = {
            id : Number(req.params.id),
            first_name,
            last_name,
            email,
            gender
        }
        Teachers.postEdit(data, function(err, result) {
            if(err) {
                res.send(err);
            } else {
                let editSuccess = `Success edit from table Teachers`;
                req.app.locals.successMessage = editSuccess;
                res.redirect('/teachers');
            }
        })
    }

    static delete(req, res) {
        let id = req.params.id;
        Teachers.delete(id, (err, data) => {
            if(err) {
                res.send(err);
            } else {
                let deleteSuccess = `Success delete from table Teachers`;
                req.app.locals.successMessage = deleteSuccess;
                res.redirect('/teachers');
            }
        })
    }
}

module.exports = ControllerTeachers;