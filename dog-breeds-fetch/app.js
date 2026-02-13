//to get cross-platform absolute valid paths strings for view engine setup:
import { fileURLToPath } from "node:url";
import path from 'node:path';
//http imported in bin/www
import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';
import expressLayouts from "express-ejs-layouts";


import dogsRouter from './routes/dogs.js';

const app = express();

// view engine setup (not needed for this project)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "layout");
app.use(express.static(path.join(__dirname, 'public')));

// app.use(logger('dev')); --> used custom logger params:
app.use(logger(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', dogsRouter);

// Catch 404 and forward
app.use((req, res, next) => {
  next(createError(404, "Route Not Found"));
});

// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(status);

  // If request expects JSON (API-style)
  if (req.originalUrl.startsWith("/api")) {
    return res.json({
      error: err.name,
      message: err.message,
      status,
      path: req.originalUrl,
      method: req.method
    });
  }

  // Otherwise render error page
  res.render("error", {
    status,
    message: err.message
  });
});

export default app;