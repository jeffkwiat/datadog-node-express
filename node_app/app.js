
// Dependancies
const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
var session = require('express-session');
//const restful = require('node-restful');
const mongoose = require('mongoose');
//mongoose = restful.mongoose;

const port = process.env.PORT || 3000;
const tracer = require('dd-trace').init({ service: 'node-express', // shows up as Service in Datadog UI
                                        hostname: 'agent', // references the `agent` service in docker-compose.yml
                                        env: 'staging',
                                        sampleRate: 1,
                                        debug: true}) // useful for seeing request/response and any logs
// Mongodb
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect('mongodb://demo-mongo:27017/Users', { useNewUrlParser: true }).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// RedisStore
/***************Redis configuratrion********************/
// Caching something using Redis
var RedisStore = require('connect-redis')(session);
var confRedis = require('./config/redis.js');
const redis = require('redis');
// Redis session

app.use(session({
  store: new RedisStore(confRedis.session),
  secret: confRedis.secret,
  resave: true,
  saveUninitialized: true,
  name: 'demo',
  cookie: {
    secure: confRedis.secure_cookie,
    maxAge: 3600000 //1 Hour
  }
}));


// simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

require('./routes/routes')(app);


// Start Server
app.listen(port);
console.log('API is running on port localhost:3000');
