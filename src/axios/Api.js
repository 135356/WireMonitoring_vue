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
    //上传
    uploadMedia(){
        return new Promise((resolve)=> {
            let file = event.target.files[0];
            //let form_data = new FormData(); //建立form对象
            //form_data.append('img',file,file.name);
            let token = this.bb_local.getLocal("token");
            if(!token || token === "undefined"){
                resolve({"data":{"state":-1000}});
            }else{
                Ajax.post('/file',file,{
                    headers:{
                        'content-type':'multipart/form-data',
                        'accounts_id':this.bb_local.getLocal("accounts"),
                        'accounts_token':token,
                        'file_name':file.name,
                    }
                }).then(res=>{
                    console.log(res);
                    resolve(res);
                }).catch(err => {
                    console.error(err);
                });
            }
        });
    }
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
            data["token"] = this.bb_local.getLocal("token");
            if(!data["token"]){
                resolve({"data":{"state":-1000}});
            }else{
                Ajax.post('/change_password',data).then(res=>{
                    resolve(res);
                }).catch(err => {
                    console.error(err);
                });
            }
        });
    }
    //登陆
    logIn(data){
        return new Promise((resolve)=> {
            Ajax.post('/logIn',data).then(res=>{
                if(res["data"]["state"] === 0){
                    this.bb_local.createLocal("accounts",data["accounts"]);
                    this.bb_local.createLocal("token",res["data"]["token"]);
                }else{
                    this.bb_local.deleteLocal("accounts");
                    this.bb_local.deleteLocal("token");
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
            let token = this.bb_local.getLocal("token");
            if(!token){
                resolve({"data":{"state":-1000}});
            }else{
                Ajax.post('/logIn_Token', {'accounts':this.bb_local.getLocal("accounts"),'token':token}).then(res=>{
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
            Ajax.post('/logOut', {'accounts':this.bb_local.getLocal("accounts"),'token':this.bb_local.getLocal("token")}).then(res=>{
                resolve(res);
            }).catch(err => {
                console.error(err);
            });
            this.bb_local.deleteLocal("accounts");
            this.bb_local.deleteLocal("token");
        });
    }

}

export default Api;