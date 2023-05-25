class AutoFontSize {
    min_size = 6;
    constructor(){
        let width=320;
        let font_size=7.1;
        let docEl = document.documentElement;
        let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        let setRem = ()=>{
            let clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            this.min_size=font_size*(clientWidth/width);
            if(!this.min_size||this.min_size<font_size){this.min_size=font_size;}
            docEl.style.fontSize = this.min_size+'px';
            localStorage.setItem('font_size_', this.min_size+'');
        };
        //改变窗口大小时重新设置rem
        if (!document.addEventListener) return;
        window.addEventListener(resizeEvt, setRem, false);
        document.addEventListener('DOMContentLoaded', setRem, false);
    }
}

export default AutoFontSize;