class item {
    constructor(idx, title, desc, due) {
        this.idx = idx;
        this.title = title;
        this.desc = desc;
        this.due = due;
    }
}

var app = angular.module("todoApp", []);
app.controller("todoList", function($scope) {
    $scope.todoList = [];
    $scope.addItem = addItem;
    $scope.delItem = delItem;

    init()
    function init(){
        $scope.addItem("Title 0", "Desc 0", "Due 0")
    }

    function addItem(title, desc, due){
        var idx = $scope.todoList.length;
        var newItem = new item(idx, title, desc, due);
        $scope.todoList.push(newItem);
    };

    function delItem(idx){
        $scope.todoList.splice(idx, 1);
        reIDX($scope.todoList);
    }

    function reIDX(newList){
        for(var i = 0; i < newList.length; i++){
            newList[i].idx = i;
        }
    }
});