"use strict";

//DOM -> Document Object Model

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("#button");


loginBtn.addEventListener("click",login);

function login(){
    if(!id.value) return alert("아이디를 입력해주세요.");
    if(!psword.value) return alert("비밀번호를 입력해주십시오.");
    
    const req = {
        id: id.value,
        psword: psword.value,
    };    
    //console.log(req); //objec 형태로 key 와 value 
    //console.log(JSON.stringify(req)); //문자열로 감싸진다.

    
    fetch("/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res)=>{
        if(res.success){
            location.href = "/";
        }
        else{
            if(res.err) return alert(res.err);
            alert(res.msg);
        }
    })
    .catch((err)=>{
        //console.error(new Error('로그인 중 에러 발생'));
        console.error('로그인 중 에러 발생');
    });
    
}

//console.log(id);