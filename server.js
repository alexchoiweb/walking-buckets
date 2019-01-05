const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local');
const User = require('./models/User');
// const path = require('path');
// const jwt = require('jsonwebtoken');
// const keys = require('./config/keys')
// const passportLocalMongoose = require('passport-local-mongoose');

const app = express();

// Use BodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Use Cookie-session
app.use(session({
  secret: 'secretySecret',
  saveUninitialized: false,
  resave: false,
  // name:'session',
  // maxAge: 24*60*60*1000,
  // keys: process.env.cookieKey || [require('./config/keys').session.cookieKey],
}));

// Use Passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Connect to the Database
let db = '';
db = process.env.mongoURI
if (db == undefined ) {
  db = require('./config/keys').mongoURI;
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log(`MongoDB connected...`))
  .catch(err => console.log(err));

// Log Routes
const logsRouter = require('./routes/api/logs');
app.use('/api/logs', logsRouter);

// Auth Routes
const authRouter = require('./routes/api/auth');
app.use('/api/auth', authRouter);

app.get('/api/userId', (req, res) => {
  if (req.user._id === undefined) {
    return console.log('req.user._id is undefined')
  } else {
    res.json({ 
      userId: req.user._id
    })
  }
})

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// Port and Listen
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on ${port}...`));