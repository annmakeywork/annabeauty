var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mainRouter = require('./routes/main');
var cartRouter = require('./routes/cart');
var usersRouter = require('./routes/users');
var contactsRouter = require('./routes/contacts');
var kawaiicollectionRouter = require('./routes/kawaii-collection');
var foundationRouter = require('./routes/foundation');
var lipstickRouter = require('./routes/lipstick');
var faqRouter = require('./routes/faq');
var termsRouter = require('./routes/terms');

var app = express();

 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/cart', cartRouter);
app.use('/kawaii-collection', kawaiicollectionRouter);
app.use('/contacts', contactsRouter);
app.use('/faq', faqRouter);
app.use('/terms', termsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
