"use strict";

const fs = require("fs").promises;

class UserStorage{
    static #getUserInfo(data, id){
        const users = JSON.parse(data);            
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});        
        return userInfo;
    }

    static #getUsers(data,siAll,ields){
        const users = JSON.parse(data);
        if(siAll) return users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});        
        return newUsers; 
    }

    static getUser(siAll,...fields){
        return fs
        .readFile("./src/databases/user.json")
        .then((data)=>{
            return this.#getUsers(data,siAll,fields);
        })
        .catch(console.error);
    }

    static getUserInfo(id){        
        return fs
        .readFile("./src/databases/user.json")
        .then((data)=>{
            return this.#getUserInfo(data,id);
        })
        .catch(console.error);
    }
    
    static async save(userInfo){
        const users = await this.getUser(true);
        console.log(users);
        if(users.id.includes(userInfo.id)){
            //return new Error("이미 존재하는 아이디입니다.");
            throw "이미 존재하는 아이디입니다."; 
        }

        //데이터 추가
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/user.json",JSON.stringify(users));
        return { success:true };        

    }
}

module.exports = UserStorage;