"use strict";

const express = require('express');
const app = express();
const home = require('./src/routes/home');

//앱 세팅
app.set('views', './src/views');
//엔진코드 해석 명시
app.set('view engine','ejs');
//미들웨어 세팅
app.use(express.static(`${__dirname}/src/public`));

//미들웨어를 등록해주는 메서드
app.use('/',home);

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
