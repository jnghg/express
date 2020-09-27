const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const port = process.env.PORT || 5000;
const route = require('./routes/index');
const login = require('./routes/login');
const db = require('./db.js'); // db 불러오기
// const session = require('express-session'); // 세션 설정
// const passport = require('passport');
// const passportConfig = require('./passport.js');

// app.use(session({ secret: 'S#E#C#R#E#T', resave: true, saveUninitialized: false })); // 세션 활성
// app.use(passport.initialize()); // passport 구동
// app.use(passport.session()); // 세션 연결

// passportConfig();

app.use(helmet());

db(); // 실행

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', route);
app.use('/api/login', login);

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})
