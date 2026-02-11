//to get cross-platform absolute valid paths strings for view engine setup:
import { fileURLToPath } from "node:url";
import path from 'node:path';
//http imported in bin/www
import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';


import factsRouter from './routes/facts.js';

const app = express();

// view engine setup (not needed for this project)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev')); --> used custom logger params:
app.use(logger(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/facts', factsRouter);

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
  res.json({
    'error': err.name,
    "message": err.message,
    "status": err.status,
    "path": path.fileURLToPath,
    "method": err.method
  });
});

export default app;