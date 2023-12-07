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
                    {headers:{'Content-Type':'multipart/form-data'}}
                    ).then(res=>{
                        if(res.data["state"]==0){
                            //上传成功之后服务器会生成一个新的文件名，拼接上token才能访问
                            let path = '/'+res.data["file_path"]+'?request_type=download&access_token='+token;
                            resolve({'address':path,'code':1,'type':file[0]['type']});
                        }else{
                            console.error(res.data["msg"]);
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
    //摄像头向上移动
    cameraUp(){
        return new Promise((resolve)=> {
            Ajax.post('/cameraUp').then(res=>{
                resolve(res);
            }).catch(err => {
                console.error(err);
            });
        });
    }
    //摄像头向下移动
    cameraDown(){
        return new Promise((resolve)=> {
            Ajax.post('/cameraDown').then(res=>{
                resolve(res);
            }).catch(err => {
                console.error(err);
            });
        });
    }
    //摄像头向左移动
    cameraLeft(){
        return new Promise((resolve)=> {
            Ajax.post('/cameraLeft').then(res=>{
                resolve(res);
            }).catch(err => {
                console.error(err);
            });
        });
    }
    //摄像头向右移动
    cameraRight(){
        return new Promise((resolve)=> {
            Ajax.post('/cameraRight').then(res=>{
                resolve(res);
            }).catch(err => {
                console.error(err);
            });
        });
    }
    //注册
    logOn(data){
        return new Promise((resolve)=> {
            Ajax.post('/logon',data).then(res=>{
                resolve(res);
            }).catch(err => {
                console.error(err);
                resolve({"data":{"state":-400,"msg":"服务器连接失败"}});
            });
        });
    }
    //登陆
    logIn(data){
        return new Promise((resolve)=> {
            Ajax.post('/login',data).then(res=>{
                if(res.data["state"] === 0){
                    this.bb_local.createLocal("accounts",data["accounts"]);
                    this.bb_local.createLocal("token",res.data["token"]);
                }else{
                    this.bb_local.deleteLocal("accounts");
                    this.bb_local.deleteLocal("token");
                }
                resolve(res);
            }).catch(err => {
                console.error(err);
                resolve({"data":{"state":-400,"msg":"服务器连接失败"}});
            });
        });
    }
    //token登陆
    logInToken(){
        return new Promise((resolve)=> {
            let token = this.bb_local.getLocal("token");
            if(!token){ //没有token就不进行token登陆
                resolve({"data":{"state":-10,"msg":"没有token"}});
            }else{
                Ajax.post('/login_token', {
                    'accounts':this.bb_local.getLocal("accounts"),
                    'token':token
                }).then(res=>{
                    resolve(res);
                }).catch(err => {
                    console.error(err);
                    resolve({"data":{"state":-400,"msg":"服务器连接失败"}});
                });
            }
        });
    }
    //登出
    logOut(){
        return new Promise((resolve)=> {
            Ajax.post('/logout', {
                'accounts':this.bb_local.getLocal("accounts"),
                'token':this.bb_local.getLocal("token")
            }).then(res=>{
                resolve(res);
            }).catch(err => {
                console.error(err);
            });
            this.bb_local.deleteLocal("accounts");
            this.bb_local.deleteLocal("token");
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
    //新增风险信息
    riskAdd(data){
        return new Promise((resolve)=> {
            Ajax.post('/ConstructionManagementC', {
                'accounts':this.bb_local.getLocal("accounts"),
                'token':this.bb_local.getLocal("token"),
                'name':data['name'], //项目名称
                'area':data['area'], //所属片区
                'area_name':data['area_name'], //区间名称
                'undertake_department':data['undertake_department'], //负责部门
                'undertake_person':data['undertake_person'], //负责人
                'report_person':data['report_person'], //上报人
                'report_phone':data['report_phone'], //上报人联系方式
                'risk_level':data['risk_level'], //风险级别
                'state':data['state'], //状态
                'MP_date_start':data['MP_date_start'], //监控时段开始
                'MP_date_end':data['MP_date_end'], //监控时段结束
                'notes':data['notes'], //备注
            }).then(res=>{
                if(res.data["state"] === 0){
                    resolve({"state":0,"msg":"成功"});
                }else{
                    resolve({"state":-1,"msg":"错误，可能token超时"});
                }
            }).catch(err => {
                console.error(err);
                resolve({"data":{"state":-400,"msg":"服务器连接失败"}});
            });
        });
    }
    //获取风险信息列表
    riskList(data){
        return new Promise((resolve)=> {
            Ajax.post('/ConstructionManagementR', {
                'accounts':this.bb_local.getLocal("accounts"),
                'token':this.bb_local.getLocal("token"),
                'page_type':data['page_type'], //0指定页、-1上翻页、1下翻页
                'page':data['page'],
                'id':data['id'],
                'length':8,
            }).then(res=>{
                resolve(res);
            }).catch(err => {
                console.error(err);
                resolve({"data":{"state":-400,"msg":"服务器连接失败"}});
            });
        });
    }
    //删除风险信息
    riskDel(data){
        return new Promise((resolve)=> {
            Ajax.post('/ConstructionManagementD', {
                'accounts':this.bb_local.getLocal("accounts"),
                'token':this.bb_local.getLocal("token"),
                'id':data['id']
            }).then(res=>{
                if(res.data["state"] === 0){
                    resolve({"state":0,"msg":"成功"});
                }else{
                    resolve({"state":-1,"msg":"错误，可能token超时"});
                }
            }).catch(err => {
                console.error(err);
                resolve({"data":{"state":-400,"msg":"服务器连接失败"}});
            });
        });
    }
}

export default Api;