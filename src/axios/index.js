import Axios from 'axios'

class AxiosObj {
    axios;
    asset_url; //静态资产链接
    api_url = '/test'; //api交互链接
    dev_env_=process.env.NODE_ENV === 'development'; //是否开发环境
    constructor() {
        /*this.axios = Axios.create({
            baseURL: this.api_url,
            headers: {'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded'}, //请求头信息XMLHttpRequest是Ajax异步请求方式，为null则传统同步请求
            timeout: 30000, //设置超时时间
            responseType: 'json', //返回数据类型,默认也是json
            transformRequest: [function (data) {
                return Qs.stringify(data) //对json数据转成&字符拼接的形式
            }],
        });*/
        this.axios = Axios.create({
            baseURL: this.dev_env_?this.api_url:'',
            timeout: 30000, //设置超时时间
            responseType: 'json', //返回数据类型,默认也是json
        });
        this.asset_url = this.dev_env_?'http://127.0.0.1/':'http://39.96.177.4/'
    }

    get(path,data){
        /*return this.axios({
            method: 'get',
            url: path,
            params: data
        });*/
        return this.axios.get(path,{params:data});
    }
    post(path,data,headers){
        return this.axios.post(path,data,headers);
    }
    put(path,data){
        return this.axios.put(path,data);
    }
    patch(path,data){
        return this.axios.patch(path,data);
    }
    delete(path,data){
        return this.axios.delete(path, {
            params: data
        });
    }
}

export default new AxiosObj();
