"use strict";

const User = require("./User");

class UserStorage{
    static #users = {
        id: ["yoonit","나개발","윤팀장"],
        psword: ["123","1234","12345"],
        name: ["성주니","개발자","연습중"],
    };

    static getUser(...fields){
        //console.log(fields);
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        //console.log(newUsers);
        return newUsers; 
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;         
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        //console.log(users);
        return { success: true};
    }
}

module.exports = UserStorage;