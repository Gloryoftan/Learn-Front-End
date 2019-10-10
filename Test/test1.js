function calculate(str) {
    //1.整理 全角半角转换 以及字母前面加上Math.
    let strNew = '';
    let flag = false;
    for (i = 0; i < str.length; i++) {
        code = str.charCodeAt(i);//获取当前字符的unicode编码
        if (code >= 65281 && code <= 65373) {
            if (flag) {
                strNew += '[';
                flag = false;
            }
            //把全角字符的unicode编码转换为对应半角字符的unicode码
            strNew += String.fromCharCode(str.charCodeAt(i) - 65248);
        } else if (code == 12288) {
            if (flag) {
                strNew += '[';
                flag = false;
            }
            strNew += String.fromCharCode(str.charCodeAt(i) - 12288 + 32);
        } else if (97 <= code && code <= 122 || 65 <= code && code <= 90) {
            //遇到字母前面加上 Math.
            strNew += flag ? '' : 'Math.'
            flag = true;
            strNew += str.charAt(i);
        }
        else {
            if (flag) {
                strNew += '[';
                flag = false;
            }
            strNew += str.charAt(i);
        }
    }
    flag = true;
    //2.找括号从最里层括号开始叠层计算
    while (flag) {
        let arr = strNew.split('(');
        if (arr.length == 1) {
            flag = false;
        }
        let innerStr = arr[arr.length - 1].split(')')[0];
        let oldInner = innerStr;
        //3.处理 Math.
        if (innerStr.indexOf('[') != -1) {
            let strMath = '';
            innerStr.split('[').forEach((item, index, arr) => {
                if (index == 0) {
                    strMath = item + '(';
                } else {
                    let i = item.search(/[^0-9.]/);

                    strMath += i == -1 ? item + ')' : item.replace(item[i], ')' + item[i]);
                    strMath += index == arr.length - 1 ? '' : '(';

                }
            })
            innerStr = strMath;
        }
        //4.处理^
        if (innerStr.indexOf('^') != -1) {
            let base;
            let power;
            innerStr.split('^').forEach((item, index, arr) => {
                let cc = item.replace(/[^0-9.]/g, '`').split('`');
                if (index != 0) {
                    power = cc[0];
                    innerStr = innerStr.replace(base + '^' + power, 'Math.pow(' + base + ',' + power + ')');
                }
                base = cc[cc.length - 1];
            })
        }
        strNew = flag ? strNew.replace('(' + oldInner + ')', eval(innerStr)) : eval(innerStr);
    }
    return strNew;
}