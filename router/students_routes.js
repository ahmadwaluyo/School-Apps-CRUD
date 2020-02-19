const router = require("express").Router();
const ControllerStudents = require('../controller/controllerStudents');

router.get('/', (req, res) => {
    ControllerStudents.students(req, res);
});

router.get('/add', (req, res) => {
    ControllerStudents.get(req, res);
});

router.post('/add', (req, res) => {
    ControllerStudents.post(req, res);
})

router.get('/edit/:id', (req, res) => {
    ControllerStudents.getEdit(req, res);
});

router.post('/edit/:id', (req, res) => {
    ControllerStudents.postEdit(req, res);
});

router.get('/delete/:id', (req, res) => {
    ControllerStudents.delete(req, res);
});


module.exports = router;