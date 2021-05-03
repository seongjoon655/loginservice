"use strict";

class UserStorage{
    static #users = {
        id: ["yoonit","나개발","윤팀장"],
        psword: ["123","1234","12345"],
        names: ["성주니","개발자","연습중"],
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
}

module.exports = UserStorage;