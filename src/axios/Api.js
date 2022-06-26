import Ajax from "./index";

class Api{
    test(data){
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
    }
    //注册
    logOn($bb_local,data){
        return new Promise((resolve)=> {
            Ajax.post('/logOn',data).then(res=>{
                resolve(res);
            }).catch(err => {
                console.error(err);
            });
        });
    }
    //登陆
    logIn($bb_local,data){
        return new Promise((resolve)=> {
            Ajax.post('/logIn',data).then(res=>{
                $bb_local.createLocal("token",res["data"]["token"]);
                $bb_local.createLocal("token_1",res["data"]["token_1"]);
                resolve(res);
            }).catch(err => {
                console.error(err);
            });
        });
    }
    //token登陆
    logInToken($bb_local){
        return new Promise((resolve)=> {
            Ajax.post('/logInToken', {'token':$bb_local.getLocal("token"),'token_1':$bb_local.getLocal("token_1")}).then(res=>{
                resolve(res);
            }).catch(err => {
                console.error(err);
            });
        });
    }
    //登出
    logOut(data){
        return new Promise((resolve)=> {
            Ajax.post('/logOut',data).then(res=>{
                resolve(res);
            }).catch(err => {
                console.error(err);
            });
        });
    }
}

export default Api;