function JamTree(option) {
    this._init(option);
}
JamTree.prototype = {
    _init: function (option) {
        this.parentId = option.parentId || "body";
    }
}

let trees = new JamTree({
    parentId: 'tree-cntr',
})

trees.treeAppend();