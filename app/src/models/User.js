"use strict";

const UserStorage = require('./UserStorage');

class User{
    //철자 조심 ..
    //constructor
    //constuctor    
    constructor(body){
        this.body = body;
    }
    
    //UserStorage.getUserInfo 함수가 
    //promise 를 반환하기 때문에 awiat 을 앞에 붙여줘야지
    //peding 이 아닌 정상적인 promise 를 받을 수 있고,
    //await 를 걸어서 함수를 사용했기 때문에
    //해당 함수를 사용하는 login 함수는 
    //async 라는 처리를 진행하는 함수안에서 사용한다.
    async login(){
        try{
            const client = this.body;
            const res = await UserStorage.getUserInfo(client.id);;
            //console.log(res);
            const { id,psword } =  res;        
            //console.log({ id,psword });
            //await UserStorage.getUserInfo(client.id); 
            
            if(id){
                if(id === client.id && psword === client.psword) {
                    return { success: true};
                }
                return { success:false, msg:"비밀번호가 틀렸습니다."};
            }
            return { success:false, msg:"존재하지 않는 아이디입니다."};    
        }   
        catch(err){
            return { success:false, msg:err };
        }
    }

    async register(){
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response;
        }catch(err){
            //console.error(err);
            return { success:false, msg:err };
        }
    }
}

module.exports = User;