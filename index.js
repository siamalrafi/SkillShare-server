const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;


const courses = require('./data/courses.json');
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/courses-data', (req, res) => {
    res.send(courses)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})