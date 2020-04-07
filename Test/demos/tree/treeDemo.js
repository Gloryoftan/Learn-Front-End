/* global $ */
function JamTree(option) {
    this._init(option);
}
JamTree.prototype = {
    _init: function (option) {
        this.parentId = option.parentId || "body";
    },
    treeAppend: function () {
        let $Ul = $('<ul class="tree">')
        $("#" + this.parentId).append($Ul)
    }
}

let trees = new JamTree({
    parentId: 'tree-cntr',
})

trees.treeAppend();