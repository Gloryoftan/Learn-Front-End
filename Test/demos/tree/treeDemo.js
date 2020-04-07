/* global $ */
function JamTree(option) {
    this._init(option);
}
JamTree.prototype = {
    _init: function (option) {
        this.parentId = option.parentId || "body";
        this.treeJson = option.treeJson || '';
    },
    treeRender: function () {
        this._appendTree(this.treeJson)


    },
    _appendTree: function (treeJson) {
        let $Ul = $('<ul class="tree">');

        $("#" + this.parentId).append($Ul)
    },
    //展开
    _unfold: function ($li) {
        if (!$li) {
            return;
        }
        let list = [];
        (function tt(obj) {
            let objParent = obj.parentElement.parentElement;
            if (!objParent.id && objParent.className.indexOf('on') == -1) {
                list.unshift(objParent.firstElementChild);
                tt(objParent);
            }
        })($li)
        if (list.length == 0) {
            return;
        }
        list.forEach(function (item) {
            $(item).click();
        })
    },
    //收起
    _fold: function ($li) {
        let list = [$li];
        (function tt(obj) {
            if (obj.children('ul').children('.on').length != 0) {
                let children = obj.children('ul').children('.on');
                children.each(function (index, item) {
                    list.unshift($(item));
                    tt($(item));
                })
            }
        })($li)
        list.forEach(function (item, index) {
            setTimeout(function () {
                item.removeClass('on');
                item.children('i').attr('class', 'iconfont icon-more');
                item.children('ul').slideToggle('fast');
            }, index * 300);
        })
    }
}

let trees = new JamTree({
    parentId: 'tree-cntr',
})

trees.treeRender();