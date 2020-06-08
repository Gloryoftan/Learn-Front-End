import popEvent from './event.js';

let temp = document.createElement('template');
document.body.appendChild(temp);
temp.innerHTML = `
<div class="mask" data-hide='true'></div>
<div class="dialog_box bg2">
    <div class="dialog_header"></div>
    <div class="dialog_title">{{ title}}</div>
    <div class="dialog_content">{{content}}</div>
    <div class="btn_line">
        <div class="btn cancel" data-hide='true' data-cancel='123'>知道了</div>
        <div class="btn confirm" data-confirm='javascript'>马上来抢</div>
    </div>
</div>`;

export default class myCom extends HTMLElement {
    constructor() {
        super();
        console.log(this.innerHTML);
        let attr = this.attributes;
        this._data = {
            title: attr.title ? attr.title.value : '默认的标题',
            content: attr.content ? attr.content.value : '这里是默认的内容，这个人很懒，什么有意义的内容都没有留下',
        }
        this.render();
        this.bindEvent();
        this.compileNode(this.obj);
        this.observe(this._data);

        setTimeout(() => {
            this._data.title = '这里是修改的标题'
        }, 2000)

    }
    observe(data) {
        let _this = this;
        this._data = new Proxy(data, {
            set(obj, prop, value) {
                let event = new CustomEvent(prop, {
                    detail: value
                });
                _this.dispatchEvent(event);
                return Reflect.set(...arguments);
            }
        });
    }

    render() {
        this.btn = document.createElement('button');
        this.btn.innerText = '点击显示弹窗';
        this.btn.setAttribute('data-open', 'true');
        this.obj = document.createElement('div');
        this.obj.append(temp.content.cloneNode(true));
        this.append(this.obj, this.btn);
        this.hide();
    }
    compileNode(el) {
        let child = el.childNodes;
        [...child].forEach((node) => {
            if (node.nodeType === 3) {
                let text = node.textContent;
                let reg = /\{\{\s*([^\s\{\}]+)\s*\}\}/g;
                if (reg.test(text)) {
                    let $1 = RegExp.$1;
                    this._data[$1] && (node.textContent = text.replace(reg, this._data[$1]));

                    this.addEventListener($1, (e) => {
                        node.textContent = text.replace(reg, e.detail)
                    })

                };
            } else if (node.nodeType === 1) {
                let attrs = node.attributes;
                if (attrs.hasOwnProperty('v-model')) {
                    let keyname = attrs['v-model'].nodeValue;
                    node.value = this._data[keyname];
                    node.addEventListener('input', e => {
                        this._data[keyname] = node.value;
                    });
                    // console.log(this._data);
                    // console.log(attrs['v-model'].nodeValue);
                }

                if (node.childNodes.length > 0) {
                    this.compileNode(node);
                }
            }
        })
    }

    bindEvent() {
        this.event = new popEvent({
            obj: this
        });
    }
    open() {
        this.obj.style.display = 'block';
    }
    hide() {
        console.log('点击了mask');
        this.obj.style.display = 'none';
    }
    cancel() {
        console.log('点击了取消');
    }
    confirm() {
        console.log('点击了确定');
    }
    test() {
        console.log('触发了弹窗的点击事件');
    }
}

window.customElements.define('my-com', myCom);

let style = document.createElement('style');
document.body.appendChild(style);
style.innerText = `
body {
    margin: 0;
}

.dialog_box {
    width: 521px;
    height: 563px;
    border-radius: 8px;
    box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.4);
    background-color: #fff;
    position: absolute;
    padding: 0 40px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

.dialog_box.bg1 {
    background-image: url("img/bg_03.png");
    background-repeat: no-repeat;
    background-size: 100%;
}

.dialog_box.bg2 {
    background-image: url("img/bg_06.png");
    background-repeat: no-repeat;
    background-size: 100%;
}

.dialog_header {
    height: 215px;
}

.dialog_title {
    height: 57px;
    font-size: 30px;
    text-align: center;
    line-height: 57px;
}

.dialog_content {
    height: 130px;
    text-align: center;
    font-size: 24px;
    line-height: 29px;
    padding: 30px 52px 0;
}

.btn_line {
    height: 110px;
    display: flex;
    justify-content: center;
}

.btn {
    width: 221px;
    height: 74px;
    border-radius: 4px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    font-size: 30px;
    line-height: 74px;
    text-align: center;
    cursor: pointer;
    margin: 0 20px;
}

.btn.cancel {
    background: #e7e7e7;
}

.btn.confirm {
    background: #e5322e;
    color: #fff;
}

.mask {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}`