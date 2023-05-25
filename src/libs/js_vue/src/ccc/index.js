import store from '@/store'

class Ccc {
    constructor() {
    }

    this_(this_) {
        this.this__ = this_;
        return this;
    }

    imgError(photo) {
        photo = photo || require('./assets/img/img_load.png');
        let element = event.srcElement;
        element.src = photo;
        element.onerror = null;
        return false;
    }

    /*弹框*/
    alert(text,time){
        if(time){
            text={'text':text,'time':time};
        }
        store.dispatch('alertA', text);
    }
}

export default Ccc;
