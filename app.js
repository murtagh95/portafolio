const createError = require('http-errors');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mysql = require('mysql');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users'); 
const adminRouter = require('./routes/admin'); 
const bodyParser = require('body-parser');

const app = express();

// Configuracion
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}))
app.set('view engine', 'hbs');


// Declaracion de variables
app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// MIDDLEWARES


// PUBLIC
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// STARTING SERVER
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});




module.exports = app;
