"use strict";

//모듈
const express = require('express');
const bodyPaser = require('body-parser');
const morgan = require('morgan');
const loggger = require('./src/config/logger');
const dotenv = require('dotenv');
const fs = require('fs');

const app = express();
dotenv.config();

const accessLogStream = require('./src/config/log');

//라우팅
const home = require('./src/routes/home');
const logger = require('./src/config/logger');

//const logger = require('./src/config/logger');
//logger.log('info','hello winston');
//logger.error('hello winston');

//앱 세팅
app.set('views', './src/views');//view 폴더위치
app.set('view engine','ejs');//엔진코드 해석 명시
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyPaser.json());
//URL을 통해서 전달되는 테이터에 한글,
//morgan 과 wiston 을 동시에 사용해서 로그 출력 방법
//app.use(morgan('tiny', {stream: logger.stream}));


//공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제를 해결
app.use(bodyPaser.urlencoded({ extended: true }));

//로그 출력
/*
app.use(morgan('dev'));
//app.use(morgan('common',{stream:accessLogStream}));
app.use(morgan(':method :url :date[web]',{stream:accessLogStream}));
*/

app.use('/',home);//미들웨어를 등록해주는 메서드

module.exports = app;





//http 형식으로 server webserver 실행
/*
const http = require('http');
const app = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})


    //console.log(req.url);
    if(req.url === '/'){
        res.end("여기는 루트입니다.");
    } 
    else if(req.url === '/login'){
        res.end("여기는 로그인 화면입니다.");
    }
});

app.listen(3001, ()=>{
    console.log('http 로 가동된 서버 입니다.');
});
*/
