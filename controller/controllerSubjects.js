const Subjects = require("../model/subjects");

class ControllerSubjects {
    static subjects(req, res) {
        let notifSuccess = req.app.locals.successMessage;
        delete req.app.locals.successMessage;
        let search = req.query.search || '';
        search = `%${search}%`
        Subjects.display(search, (err, data) => {
            if(err) {
                res.send(err);
            } else {
                res.render('subjects', { data : data , errors : null , notifSuccess });
            }
        })
    }

    static get(req, res) {
        res.render('addSubjects', { errors : null } );
    }

    static post(req, res) {
        let { subject_name } = req.body;
        let errors = [];
        if(subject_name.length < 3) {
            errors.push(`Subject Name should be more than atleast 3 characters!`)
        }

        if(errors.length > 0) {
            res.render('addSubjects', { errors : errors });
        } else {
            Subjects.post(subject_name , function(err, data) {
                if(err) {
                    res.send(err);
                } else {
                    let addSuccess = `Success added to table Subject`;
                    req.app.locals.successMessage = addSuccess;
                    res.redirect('/subjects');
                }
            });
        } 
    }


    static subjectsData(id, res) {
        Subjects.subjectsGetData(id, (err, data) => {
            if(err) {
                res.send(err);
            } else {
                res.send(data);
            }
        })
    }

    static getEdit(req, res) {
        let id = req.params.id;
        Subjects.subjectsGetData(id, function(err, data) {
            if(err) {
                res.send(err);
            } else {
                res.render('editSubjects', {
                    errors : null,
                    subject : data[0]
                });
            }
        })
    }

    static postEdit(req, res) {
        let { subject_name } = req.body;
        let data = {
            id : Number(req.params.id),
            subject_name
        }
        Subjects.postEdit(data, function(err, result) {
            if(err) {
                res.send(err);
            } else {
                let editSuccess = `Success edit from table Subjects`;
                req.app.locals.successMessage = editSuccess;
                res.redirect('/subjects');
            }
        });
    }

    static delete(req, res) {
        let id = req.params.id;
        Subjects.delete(id, (err, data) => {
            if(err) {
                res.send(err);
            } else {
                let deleteSuccess = `Success delete from table Subjects`;
                req.app.locals.successMessage = deleteSuccess;
                res.redirect('/subjects');
            }
        });
    }
}

module.exports = ControllerSubjects;