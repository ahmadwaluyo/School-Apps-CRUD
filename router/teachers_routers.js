const router = require("express").Router();
const ControllerTeachers = require('../controller/controllerTeachers');

router.get('/', (req, res) => {
    ControllerTeachers.teachers(req, res);
});

router.get('/add', (req, res) => {
    ControllerTeachers.get(req, res);
});

router.post('/add', (req, res) => {
    ControllerTeachers.post(req, res);
})

router.get('/edit/:id', (req, res) => {
    ControllerTeachers.getEdit(req, res);
});

router.post('/edit/:id', (req, res) => {
    ControllerTeachers.postEdit(req, res);
});

router.get('/delete/:id', (req, res) => {
    ControllerTeachers.delete(req, res);
});


module.exports = router;