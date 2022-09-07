const express = require('express');
const subjectRouter = express.Router();

let subjects = [
    {id: 1, name: 'math'},
    {id: 2, name: 'physic'},
    {id: 3, name: 'english'},
];

subjectRouter.get('/', (req, res) => {
    res.json(subjects);
});

subjectRouter.get('/add', (req, res) => {
    subject.push({name: 'literature'})
    res.json(subjects);
});

//post
subjectRouter.post('/', (req, res) => {
    const { name } = req.body;
    const id = subjects.length + 1;
    subjects.push({id, name});
    res.json(subjects);
});

//put
subjectRouter.put('/:id', (req, res) => {
    const subject = subjects.find(subject => subject.id == req.params.id);
    const { name } = req.body;
    const id = subjects.length + 1;
    subject.name = name;
    subject.id = id;
    res.json(subjects);
});

//delete
subjectRouter.delete('/:id', (req, res) => {
    subjects = subjects.filter(subject => subject.id != req.params.id);
    res.json(subjects);
})

module.exports = subjectRouter;

