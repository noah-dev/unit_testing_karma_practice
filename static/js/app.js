var app = angular.module("todoApp", []).controller("todoListController", todoListController);

// https://stackoverflow.com/questions/13619837/angular-js-inject-new-instance-of-class
app.factory('SimpleItem', function(){
    return function (idx, title, desc, due){
        this.idx = idx;
        this.title = title;
        this.desc = desc;
        this.due = due;
    };
});

function todoListController($http, SimpleItem){ 
    var _this = this;
    var Item = SimpleItem;
    _this.todoList = [];
    _this.addItem = addItem;
    _this.delItem = delItem;
    _this.exportList = exportList;
    _this.importList = importList;

    function addItem(title, desc, due){
        var idx = _this.todoList.length;
        var newItem = new Item(idx, title, desc, due);
        _this.todoList.push(newItem);
    };

    function delItem(idx){
        _this.todoList.splice(idx, 1);
        for(var i = 0; i < _this.todoList.length; i++){
            _this.todoList[i].idx = i;
        }
    };

    function exportList(){
        _this.todoListJSON = angular.toJson(_this.todoList);
    };

    function importList(listJSONString){
        _this.todoList = JSON.parse(listJSONString);
    };
}