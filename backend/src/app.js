const express = require('express');
const requestLogger = require('morgan');
const sqlite = require('sqlite3');
const cors = require('cors');
const session = require('cookie-session');
const fileUpload = require('express-fileupload');
const loginHandler = require('./handlers/loginHandler');
const storyHandler = require('./handlers/storyHandler');
const Database = require('./db/database');
const userRouter = require('./routes/userRouter');
const storyRouter = require('./routes/storyRouter');
const handler = require('./handlers/commonHandler');
const {
  DB_NAME,
  CLIENT_ID,
  CLIENT_SECRET,
  SECRET_MSG,
  FRONT_END_URL,
} = require('../config');

const app = express();
const db = new Database(new sqlite.Database(DB_NAME));
app.locals = { db, CLIENT_ID, CLIENT_SECRET, SECRET_MSG, FRONT_END_URL };

app.use(requestLogger('dev'));
app.use(express.static('public'));
app.use(
  cors({
    origin: FRONT_END_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(fileUpload());
app.set('sessionMiddleware', session({ secret: SECRET_MSG }));

app.use((...args) => app.get('sessionMiddleware')(...args));
app.use((req, _, next) => {
  req.app = app;
  next();
});

// Add all the APIs below
app.use('/api/coverImage', express.static(`${__dirname}/../database/images`));
app.get(
  '/post-login',
  handler.hasQueryParams(['code']),
  loginHandler.handleLogin
);
app.get('/api/isLoggedIn', loginHandler.handlerIsLoggedIn);
app.get(
  '/api/search',
  handler.hasQueryParams(['keyword']),
  handler.allowAuthorized,
  handler.search
);
app.delete(
  '/api/draft',
  handler.allowAuthorized,
  handler.hasFields(['draftId']),
  storyHandler.deleteDraft
);
app.get(
  '/api/draft/:draftId',
  handler.hasPathParams(['draftId']),
  handler.allowAuthorized,
  storyHandler.getDraft
);
app.use('/api/story', storyRouter);
app.use('/api/user', userRouter);

module.exports = app;
