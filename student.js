const express = require('express');
const studentRouter = express.Router();

let students = [
    {id: 1, name: 'Nghia', age: 20},
    {id: 2, name: 'Nghia', age: 20},
    {id: 3, name: 'Nghia', age: 20},
];

studentRouter.get('/', (req, res) => {
    res.json(students);
});

studentRouter.get('/add', (req, res) => {
    student.push({name: 'Nghia', age: 20})
    res.json(students);
});

//post
studentRouter.post('/', (req, res) => {
    const { name, age } = req.body;
    const id = students.length + 1;
    students.push({id, name, age});
    res.json(students);
});

//put
studentRouter.put('/:id', (req, res) => {
    const student = students.find(student => student.id == req.params.id);
    const { name, age } = req.body;
    const id = students.length + 1;
    student.name = name;
    student.age = age;
    student.id = id;
    res.json(students);
});

//delete
studentRouter.delete('/:id', (req, res) => {
    students = students.filter(student => student.id != req.params.id);
    res.json(students);
})

module.exports = studentRouter;

