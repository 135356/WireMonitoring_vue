let timeout='';
export default {
    state: {
        alert:'',
        is_log_in:false,
    },
    mutations: {
        alertM(state, data) {
            state.alert = data;
        },
        isLogInM(state, data) {
            state.is_log_in = data;
        },
    },
    actions: {
        alertA({commit}, data) {
            let text=data;
            let time=2000;
            if(data['text']){
                text=data['text'];
            }
            if(parseInt(data['time'])){
                time=data['time'];
            }
            return new Promise((resolve)=>{
                if(text){
                    commit('alertM', text);
                    timeout=setTimeout(()=>{
                        if(timeout){clearTimeout(timeout);}
                        commit('alertM', '');
                        resolve(1);
                    }, time);
                }else{
                    if(timeout){clearTimeout(timeout);}
                    commit('alertM','');
                    resolve(1);
                }
            });
        },
        isLogInA({commit}, data) {
            return new Promise((resolve)=>{
                commit('isLogInM', data);
                resolve(1);
            });
        }
    }
}
