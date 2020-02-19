const router = require("express").Router();
const Controller = require('../controller/controller');
const students_routes = require('./students_routes');
const teachers_routes = require('./teachers_routers');
const subjects_routes = require('./subjects_routes');


router.get('/', (req, res) => {
    Controller.home(res)
});

router.use('/students', students_routes);
router.use('/teachers', teachers_routes);
router.use('/subjects', subjects_routes);

// router.use('/students')

// router.get('/teachers', (req, res) => {
//     ControllerTeachers.teachers(res);
// });

// router.get('/subjects', (req, res) => {
//     ControllerSubjects.subjects(res);
// });



// router.get('/teachers/add', (req, res) => {
//     ControllerTeachers.get(req, res);
// });

// router.post('/teachers/add', (req, res) => {
//     ControllerTeachers.post(req, res);
// });

// router.get('/subjects/add', (req, res) => {
//     ControllerSubjects.get(req, res);
// });

// router.post('/subjects/add', (req, res) => {
//     ControllerSubjects.post(req, res);
// })



// router.get('/teachers/edit/:id', (req, res) => {
//     ControllerTeachers.getEdit(req, res);
// });

// router.post('/teachers/edit/:id', (req, res) => {
//     ControllerTeachers.postEdit(req, res);
// });

// router.get('/subjects/edit/:id', (req, res) => {
//     ControllerSubjects.getEdit(req, res);
// });

// router.post('/subjects/edit/:id', (req, res) => {
//     ControllerSubjects.postEdit(req, res);
// });


// router.get('/teachers/delete/:id', (req, res) => {
//     ControllerTeachers.delete(req, res);
// })

// router.get('/subjects/delete/:id', (req, res) => {
//     ControllerSubjects.delete(req, res);
// });


module.exports = router;