class Base64 {
    // private property
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    // public method for encoding
    en(input) {
        if(!input){console.error('请传入要加密的值'); return ;}
        let secret_key = (0|Date.now()/1000/60/60);
        input = secret_key-((0|secret_key/100)*100)+input;
        let output = this._keyStr.charAt(Math.floor(Math.random() * this._keyStr.length));
        let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        let i = 0;
        input = this._utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
        }
        return output;
    }
    // private method for UTF-8 encoding
    _utf8_encode(string) {
        string = string.replace(/\r\n/g,"\n");
        let utf_text = "";
        for (let n = 0; n < string.length; n++) {
            let c = string.charCodeAt(n);
            if (c < 128) {
                utf_text += String.fromCharCode(c);
            } else if((c > 127) && (c < 2048)) {
                utf_text += String.fromCharCode((c >> 6) | 192);
                utf_text += String.fromCharCode((c & 63) | 128);
            } else {
                utf_text += String.fromCharCode((c >> 12) | 224);
                utf_text += String.fromCharCode(((c >> 6) & 63) | 128);
                utf_text += String.fromCharCode((c & 63) | 128);
            }
        }
        return utf_text;
    }
    // private method for UTF-8 decoding
    _utf8_decode(utf_text) {
        let string = "";
        let i = 0;
        let c =0, c1 =0, c2 = 0;
        while ( i < utf_text.length ) {
            c = utf_text.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if((c > 191) && (c < 224)) {
                c2 = utf_text.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utf_text.charCodeAt(i+1);
                c1 = utf_text.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}
export default Base64