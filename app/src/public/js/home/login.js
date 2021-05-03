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

    //fetch();
    console.log(req);

}

//console.log(id);