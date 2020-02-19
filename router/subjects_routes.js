const router = require("express").Router();
const ControllerSubjects = require('../controller/controllerSubjects');

router.get('/', (req, res) => {
    ControllerSubjects.subjects(req, res);
});

router.get('/add', (req, res) => {
    ControllerSubjects.get(req, res);
});

router.post('/add', (req, res) => {
    ControllerSubjects.post(req, res);
})

router.get('/edit/:id', (req, res) => {
    ControllerSubjects.getEdit(req, res);
});

router.post('/edit/:id', (req, res) => {
    ControllerSubjects.postEdit(req, res);
});

router.get('/delete/:id', (req, res) => {
    ControllerSubjects.delete(req, res);
});


module.exports = router;