const http = require('http');
const app = require('./app');
const sniffer = require('./sniffer');

let min = 3000;
let max = 4000;

const  rand = Math.floor(Math.random() * (max - min)) + min; 



app.set('port', process.env.PORT  ||rand);
const server = http.createServer(app);
