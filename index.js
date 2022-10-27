const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;


const courses = require('./data/courses.json');
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/courses', (req, res) => {
    res.send(courses)
})


app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    selected = courses.find(e => e.id === id);
    res.send(selected)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})