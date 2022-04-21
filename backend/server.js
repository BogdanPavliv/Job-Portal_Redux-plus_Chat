const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;
var indexRouter = require('./routes/routesChat/index');
var usersRouter = require('./routes/routesChat/users');
var roomRouter = require('./routes/routesChat/room');
var chatRoomRouter = require("./routes/routesChat/chatRoom");

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// routes

var testAPIRouter = require("./routes/testAPI");
var ApplicantRouter = require("./routes/Applicant");
var AuthRouter = require('./routes/Auth');
var ProfileRouter = require('./routes/Profile');
var RecruiterRouter = require('./routes/Recruiter');
var EducationRouter = require('./routes/Education');
var JobRouter = require('./routes/Jobs');
var ApplicantJobsRouter = require('./routes/ApplicantJobs');


// var UserRouter = require("./routes/Users");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Connection to MongoDB

mongoose.connect(
  'mongodb+srv://BogdanPavliv:Itcalifornia123@cluster0.ywsd6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully !");
});

// setup API endpoints

app.use("/testAPI", testAPIRouter);
app.use("/applicant", ApplicantRouter);
app.use("/auth", AuthRouter);
app.use("/profile", ProfileRouter);
app.use("/recruiter", RecruiterRouter);
app.use("/education", EducationRouter);
app.use("/jobs", JobRouter);
app.use("/appjobs", ApplicantJobsRouter);


// Пробуємо роутинг !!!!!!!!!!!!!!!!!!!!!!
app.use('/', indexRouter);
app.use('/api/room', roomRouter);
app.use('/api/user', usersRouter);
app.use("/chatroom", chatRoomRouter);

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

// app.use("/user", UserRouter);
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
