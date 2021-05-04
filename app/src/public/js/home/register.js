"use strict";

//DOM -> Document Object Model

const id = document.querySelector("#id");
const name = document.getSelection("#name");
const psword = document.querySelector("#psword");
const confirmPsword = document.querySelector("#confirm-psword");
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register(){
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
    };    
        
    fetch("/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res)=>{
        if(res.success){
            location.href = "/login";
        }
        else{
            alert(res.msg);
        }
    })
    .catch((err)=>{
        //console.error(new Error('로그인 중 에러 발생'));
        console.error('회원가입 중 에러 발생');
    });

    

}
