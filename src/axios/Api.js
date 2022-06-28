import Ajax from "./index";
import Local from '@/libs/js_vue/src/local'

class Api{
    bb_local=new Local();

    /*test(data){
        return new Promise((resolve)=> {
            Ajax.get('/a1_get',{
                'aaa': 123,
                'bbb': 'bbb',
            }).then(res=>{
                console.log('a1_get:',res);
            });
            Ajax.post('/a2_post',{
                'aaa': 123,
                'bbb': 'bbb',
            }).then(res=>{
                console.log('a2_post',res);
            });
            Ajax.put('/put',{
                'aaa': 123,
                'bbb': 'bbb',
            }).then(res=>{
                console.log('put',res);
            });
            Ajax.patch('/patch',{
                'aaa': 123,
                'bbb': 'bbb',
            }).then(res=>{
                console.log('patch',res);
            });
            Ajax.delete('/delete',{
                'aaa': 123,
                'bbb': 'bbb',
            }).then(res=>{
                console.log('delete',res);
            });
        });
    }*/
    //注册
    logOn(data){
        return new Promise((resolve)=> {
            Ajax.post('/logOn',data).then(res=>{
                resolve(res);
            }).catch(err => {
                console.error(err);
            });
        });
    }
    //修改密码
    changePassword(data){
        return new Promise((resolve)=> {
            Ajax.post('/changePassword',data).then(res=>{
                resolve(res);
            }).catch(err => {
                console.error(err);
            });
        });
    }
    //登陆
    logIn(data){
        return new Promise((resolve)=> {
            Ajax.post('/logIn',data).then(res=>{
                if(res["data"]["state"] === 0){
                    this.bb_local.createLocal("accounts",data["accounts"]);
                    this.bb_local.createLocal("token",res["data"]["token"]);
                    this.bb_local.createLocal("token_1",res["data"]["token_1"]);
                }else{
                    this.bb_local.createLocal("accounts",'');
                    this.bb_local.createLocal("token",-1);
                    this.bb_local.createLocal("token_1",-1);
                }
                resolve(res);
            }).catch(err => {
                console.error(err);
            });
        });
    }
    //token登陆
    logInToken(){
        return new Promise((resolve)=> {
            let token = parseInt(this.bb_local.getLocal("token"));
            if(!token || token === -1){
                resolve({"data":{"state":-1000}});
            }else{
                Ajax.post('/logInToken', {'accounts':this.bb_local.getLocal("accounts"),'token':this.bb_local.getLocal("token"),'token_1':this.bb_local.getLocal("token_1")}).then(res=>{
                    resolve(res);
                }).catch(err => {
                    console.error(err);
                });
            }
        });
    }
    //登出
    logOut(){
        return new Promise((resolve)=> {
            Ajax.post('/logOut', {'accounts':this.bb_local.getLocal("accounts"),'token':this.bb_local.getLocal("token"),'token_1':this.bb_local.getLocal("token_1")}).then(res=>{
                resolve(res);
            }).catch(err => {
                console.error(err);
            });
            this.bb_local.deleteLocal("accounts");
            this.bb_local.deleteLocal("token");
            this.bb_local.deleteLocal("token_1");
        });
    }

}

export default Api;