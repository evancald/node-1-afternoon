const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller.js');

const app = express();

app.use( bodyParser.json() );
app.use(express.static(__dirname + '/../public/build'));

const messagesBaseURL = '/api/messages';

app.post(`${messagesBaseURL}`, mc.create);
app.get(`${messagesBaseURL}`, mc.read);
app.put(`${messagesBaseURL}/:id`, mc.update);
app.delete(`${messagesBaseURL}/:id`, mc.delete);

const port = 3001;

app.listen(port, () => {console.log(`Now listening on port ${port}`)});