describe('Main Todo App', function() {
    beforeEach(module('todoApp'));
    var $controller;
    var $scope = {};
    var Item = {};
    beforeEach(inject(function(SimpleItem) {
        Item = SimpleItem;
    }))
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
        $scope = $controller('todoListController as tlc', {$scope: $scope});
        $scope.todoList = [];
    }));

    it('Add item to empty list', function() {
        $scope.addItem("Title 0", "Desc 0", "Due 0");
        var expected = [new Item(0, "Title 0", "Desc 0", "Due 0")];
        expect($scope.todoList).toEqual(expected);
    });

    it('Delete an item from the list', function() {
        $scope.addItem("Title 0", "Desc 0", "Due 0");
        $scope.addItem("Title 1", "Desc 1", "Due 1");
        var expected = [new Item(0, "Title 1", "Desc 1", "Due 1")];
        $scope.delItem(0);
        expect($scope.todoList).toEqual(expected);
    });

    it('Exports current items as JSON', function() {
        $scope.addItem("Title 0", "Desc 0", "Due 0");
        $scope.addItem("Title 1", "Desc 1", "Due 1");
        var expected = '[{"idx":0,"title":"Title 0","desc":"Desc 0","due":"Due 0"},{"idx":1,"title":"Title 1","desc":"Desc 1","due":"Due 1"}]';
        $scope.exportList();
        expect($scope.todoListJSON).toEqual(expected);
    });


    it('Import JSON to list', function() {
        var input = '[{"idx":0,"title":"Title 0","desc":"Desc 0","due":"Due 0"},{"idx":1,"title":"Title 1","desc":"Desc 1","due":"Due 1"}]';
        $scope.importList(input);
        var expected = [{"idx":0,"title":"Title 0","desc":"Desc 0","due":"Due 0"},{"idx":1,"title":"Title 1","desc":"Desc 1","due":"Due 1"}];
        expect($scope.todoList).toEqual(expected);
    });
});