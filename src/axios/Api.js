import Ajax from "./index";
import Local from '@/libs/js_vue/src/local'

class Api{
    bb_local=new Local();
    //上传图片
    uploadMedia(){
        return new Promise((resolve)=> {
            let file = event.target.files;
            let createObjectURL = function(blob){
                return window[window.webkitURL?'webkitURL':'URL']['createObjectURL'](blob);
            };
            if(file&&file[0]){
                //resolve({'address':createObjectURL(file[0]),'code':1,'type':file[0]['type']});
                let token = this.bb_local.getLocal("token");
                if(!token || token === "undefined"){
                    resolve({"data":{"state":-1000}});
                }else{
                    Ajax.post('/png_file?access_token='+token+'&accounts='+this.bb_local.getLocal("accounts")+'&file_name='+file[0]['name']+'&file_type='+file[0]['type'],
                    file[0],
                    {headers:{'content-type':'multipart/form-data'}}
                    ).then(res=>{
                        if(res["data"]["state"]==0){
                            //上传成功之后服务器会生成一个新的文件名，拼接上token才能访问
                            let path = '/'+res["data"]["file_path"]+'?request_type=download&access_token='+token;
                            resolve({'address':path,'code':1,'type':file[0]['type']});
                        }else{
                            console.error(res["data"]["msg"]);
                        }
                    }).catch(err => {
                        console.error(err);
                    });
                }
            }else{
                resolve({'address':null,'code':0,'type':null});
            }
        });
    }
    //上传
    uploadMedia2(){
        return new Promise((resolve)=> {
            let file = event.target.files;
            //let form_data = new FormData(); //建立form对象
            //form_data.append('img',file,file.name);
            let token = this.bb_local.getLocal("token");
            if(!token || token === "undefined"){
                resolve({"data":{"state":-1000}});
            }else{
                Ajax.post('/file?access_token='+token+'&accounts='+this.bb_local.getLocal("accounts")+'&file_name='+file[0]['name']+'&file_type='+file[0]['type'],
                file[0],
                {headers:{'content-type':'multipart/form-data'}}
                ).then(res=>{
                    if(res["data"]["state"]==0){
                        //上传成功之后服务器会生成一个新的文件名，拼接上token才能访问
                        let path = Ajax.asset_url+res["data"]["file_path"]+'?request_type=download&access_token='+token;
                        resolve({'address':path,'code':1,'type':file[0]['type']});
                    }else{
                        console.error(res["data"]["msg"]);
                    }
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