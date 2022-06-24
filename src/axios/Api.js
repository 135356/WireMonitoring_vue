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
    logIn(data){
        return new Promise((resolve)=> {
            Ajax.post('/logIn',data).then(res=>{
                resolve(res);
            }).catch(err => {
                console.error(err);
            });
        });
    }
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