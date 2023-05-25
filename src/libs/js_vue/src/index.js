import Ccc from './ccc/index.js';
import Local from './local/index.js';
import Link from './link/index.js';
import Random from './random/index.js';
import AutoFontSize from './auto_font_size/index.js';
import video from './video/index.js';
import Base64 from "./encrypt/base64.js";
import Md5 from "./encrypt/md5.js";

const install = function(Vue, opts = {}) {
    Vue.prototype.$bb=new Ccc();
    Vue.prototype.$bb_link=new Link();
    Vue.prototype.$bb_local=new Local();
    Vue.prototype.$bb_random=new Random();
    Vue.prototype.$bb_base64=new Base64();
    Vue.prototype.$bb_md5=Md5;
    new video(Vue.prototype);
    new AutoFontSize();
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '0.01.2',
    install,
    Ccc,
    Local,
    Link,
    Random,
    AutoFontSize,
    video,
    Base64,
    Md5
};