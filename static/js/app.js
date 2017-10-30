function SimpleItem(idx, title, desc, due){
    this.idx = idx;
    this.title = title;
    this.desc = desc;
    this.due = due;
}

function manageList(Item){
    var _this = this;
    _this.todoList = [];
    _this.addItem = addItem;
    _this.delItem = delItem;
    _this.exportList = exportList;
    _this.importList = importList;
    Item = SimpleItem;
    //init()
    function init(){
        _this.addItem("Title 0", "Desc 0", "Due 0")
        _this.addItem("Title 1", "Desc 1", "Due 1")
        _this.addItem("Title 2", "Desc 2", "Due 2")
    };

    function add(index){
        $http.get("").then(res=>{
            console.log(res);
        });
    };

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

var app = angular.module("todoApp", []);
/*
app.controller("todoListController", ['$scope', 'manageList', 'SimpleItem', function($scope, list, item){
    console.log(list)
    //$scope = list(SimpleItem);
}]);
*/
app.controller("todoListController", [manageList]);

/*
app.controller("todoListController", function($scope, $http){
    $scope = new manageList(SimpleItem);
    console.log($scope);
    console.log($scope.addItem("1", "1", "1"));
    console.log($scope);
});
*/