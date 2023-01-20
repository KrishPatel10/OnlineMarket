const express = require('express');
const connectDB = require('./config/db');
const connect= require('./config/db');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/api/auth');

connectDB();

app.use(express.static(__dirname));
// app.use( bodyParser.json() );  // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
//   extended: true
// }));

//init middleware
app.use(express.urlencoded({ extended :false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

app.get('/signup', (req, res)=>{
    res.sendFile('signup.html', {root: __dirname});
})

app.use(router);

//Define routes 

// app.use('/api/users',require('./routes/api/users'));
// app.use('/api/profile',require('./routes/api/profile'));
// app.use('/api/post',require('./routes/api/post'));
app.use('/api/auth',require('./routes/api/auth'));

const PORT = process.env.port || 3000;
app.listen(PORT,()=>console.log('server started on port 5000'));