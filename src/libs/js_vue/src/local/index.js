class Local {
    name_ = 'bb_';
    max_length_ = 1500;//add存储时的最大长度
    separator_ = '_;_';//add分隔符

    /*终端*/
    getUA()
    {
        return navigator.userAgent;
    }

    /*是否ios*/
    isIOS()
    {
        return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)?1:0; //ios终端
    }

    /*创建本地缓存*/
    createLocal(name, data, time) {
        switch (Object.prototype.toString.call(data)) {
            case '[object Object]':
                data = JSON.stringify(data);//对象
                break;
            case '[object Array]':
                data = JSON.stringify(data);//数组
                break;
        }
        if (time) {
            localStorage.setItem(this.name_ + 'time' + name, parseInt(Date.now() / 1000) + time);
        }
        return localStorage.setItem(this.name_ + name, data);
    }

    /*在原数据基础上从后面追加,time为秒*/
    addLocal(name, data, time) {
        switch (Object.prototype.toString.call(data)) {
            case '[object Object]':
                data = JSON.stringify(data);
                break;
            case '[object Array]':
                data = JSON.stringify(data);
                break;
        }
        if (time) {
            localStorage.setItem(this.name_ + 'time' + name, parseInt(Date.now() / 1000) + time);
        }

        let data2 = localStorage.getItem(this.name_ + name);
        if (data2) {
            if (data2.length > this.max_length_) {
                data2 = data2.substr(parseInt(this.max_length_ / 2)).replace(/^_;_|^;_|^_/g, '');
            }
            return localStorage.setItem(this.name_ + name, data2 + this.separator_ + data);
        } else {
            return localStorage.setItem(this.name_ + name, data);
        }
    }

    getLocal(name, id) {
        let time = localStorage.getItem(this.name_ + 'time' + name);
        if (time && parseInt(time) < (Date.now()/1000)) {
            this.deleteLocal(name);
            return '';
        } else {
            let data = localStorage.getItem(this.name_ + name);
            if (data) {
                if (data.indexOf(this.separator_) !== -1) {
                    data = data.split(this.separator_);
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].indexOf('{') !== -1) {
                            data[i] = JSON.parse(data[i]);
                            if (Object.prototype.toString.call(id) === '[object Object]') {
                                let key = Object.keys(id)[0];
                                if (data[i][key] === id[key]) {
                                    return data[i];
                                }
                            } else if (Object.prototype.toString.call(id) === '[object Number]') {
                                if (i === id) {
                                    return data[i];
                                }
                            }
                        }
                    }
                } else if (data.indexOf('{') !== -1) {
                    data = JSON.parse(data);
                    if (Object.prototype.toString.call(id) === '[object Number]') {
                        return data[id];
                    }
                }
            }
            return data;
        }
    }

    deleteLocal(name, id) {
        let data = localStorage.getItem(this.name_ + name);
        if (data) {
            if (id&&Object.prototype.toString.call(id) === '[object Number]') {
                let str_i = data.indexOf(this.separator_);
                if (str_i !== -1) {
                    data = data.split(this.separator_);
                    data.splice(id, 1);
                    return localStorage.setItem(this.name_ + name, data.join(this.separator_));
                } else {
                    data = JSON.parse(data);
                    data.splice(id, 1);
                    return localStorage.setItem(this.name_ + name, JSON.stringify(data));
                }
            } else {
                return localStorage.removeItem(this.name_ + name);
            }
        }
    }
}

export default Local;