
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(cors());
app.use("/public", express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));                              
app.use(bodyParser.json());

const COLORS = ['black', 'white', 'green', 'blue', 'orange']

function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function debugReq(req) {
    console.log('req.headers: ', req.headers);
    console.log('req.body: ', req.body);
    console.log('req.params: ', req.params);
    console.log('req.query: ', req.query);
}

app.get('/', (req, res) => {
    debugReq(req);
    res.json({msg: 'Hello, World'});
});

app.get('/client', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/client.html'))
})

app.get('/color', (req, res) => {
    res.json({color: getRandomColor()})
})

app.post('/beers', (req, res) => {
    debugReq(req);
    res.json({id: 'id of newly created beer in db'})
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
