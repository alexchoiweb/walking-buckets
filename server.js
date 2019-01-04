const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('cookie-session');
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
  name:'session',
  key: ['keysecret'],
  
  maxAge: 24*60*60*1000,
  keys: process.env.cookieKey || [require('./config/keys').session.cookieKey],


  // secret: 'secretySecret',
  // saveUninitialized: false,
  // resave: false,
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

// app.post('/api/auth/register', function(req, res) {
//   var body = req.body,
//              username = body.username,
//              password = body.password,
//              passwordConfirm = body.passwordConfirm;
//   User.findOne({ username: username }, function(err, document) {
//     if (err) { res.status(500).send('Error ocurred') }
//     else {
//       if (document) {
//         { res.status(500).send('Username already exists - please try again') }
//       } else if (password != passwordConfirm) {
//         { res.status(500).send('Passwords do not match, please try again.')}
//       } else {
//         User.register(new User({ username: req.body.username }), req.body.password, function(err, user) {
//           if(err) {
//             console.log(err);
//           }
//           return res.redirect('/login');
//         })
//       }
//     }
//   })
// })

// app.post('/api/auth/login', passport.authenticate('local', {

//   failureRedirect: '/login',
//   successRedirect: '/'
// }), function(req, res) {
//   res.send('hey');
// });

// app.get('/api/auth/logout', function(req, res) {
//   req.logout();
//   res.json({ message: 'true facts' });
// })

// Fetch Routes

// app.get('/api/secret', function(req, res) {
//   if (req.isAuthenticated()) {
//     res.json({ isLoggedIn: 'true' })
//   } else {
//     res.json({ isLoggedIn: 'false' })
//   }
// })

app.get('/api/userId', (req, res) => {
  if (req.user_id === undefined) {
    return console.log('No user logged in')
  } else {
    res.json({ 
      userId: req.user._id,
      username: req.user.username
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