"use strict";

//DOM -> Document Object Model

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");


loginBtn.addEventListener("click",login);

function login(){
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
    .then((res)=>{});
    
}

//console.log(id);