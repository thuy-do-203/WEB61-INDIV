const express = require ('express');
const studentRouter = require('./student');
const teacherRouter = require('./teacher');
const subjectRouter = require('./subject');
const authRouter = require('./auth');
const authMiddleware = require('./authMiddleware');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/student', authMiddleware, studentRouter)
app.use('/teacher', authMiddleware, teacherRouter)
app.use('/subject', authMiddleware, subjectRouter)
app.use('/auth', authRouter)
app.listen(3000, () => console.log('App is listening on port 3000'))