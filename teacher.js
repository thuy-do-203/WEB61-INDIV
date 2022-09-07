const express = require('express');
const teacherRouter = express.Router();

let teachers = [
    {id: 1, name: 'CTN', subject: "math"},
    {id: 2, name: 'Nghia Cao', subject: "physic"},
    {id: 3, name: 'Tuan Nghia', subject: "english"},
];

teacherRouter.get('/', (req, res) => {
    res.json(teachers);
});

teacherRouter.get('/add', (req, res) => {
    teacher.push({name: 'Nghia', subject: "physic"})
    res.json(teachers);
});

//post
teacherRouter.post('/', (req, res) => {
    const { name, subject } = req.body;
    const id = teachers.length + 1;
    teachers.push({id, name, subject});
    res.json(teachers);
});

//put
teacherRouter.put('/:id', (req, res) => {
    const teacher = teachers.find(teacher => teacher.id == req.params.id);
    const { name, subject } = req.body;
    const id = students.length + 1;
    teacher.name = name;
    teacher.subject = subject;
    teacher.id = id;
    res.json(teachers);
});

//delete
teacherRouter.delete('/:id', (req, res) => {
    teachers = teachers.filter(teacher => teacher.id != req.params.id);
    res.json(teachers);
})

module.exports = teacherRouter;

