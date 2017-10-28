describe('Core Functions', function() {
    // Set up the module
    beforeEach(module('todoApp'));
    var $controller
    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('todoList Controller Tests', function() {
        it('Exports current items as JSON', function() {
            var $scope = {};
            var controller = $controller('todoListController', {$scope: $scope});

            $scope.todoList = [];
            $scope.addItem("Title 0", "Desc 0", "Due 0");

            var expected = [new item(0, "Title 0", "Desc 0", "Due 0")];
            expect($scope.todoList).toEqual(expected);
        });
    });
    
    describe('$scope.delItem', function() {
        it('Exports current items as JSON', function() {
            var $scope = {};
            var controller = $controller('todoListController', {$scope: $scope});
            $scope.todoList = [];
            $scope.addItem("Title 0", "Desc 0", "Due 0");
            $scope.addItem("Title 1", "Desc 1", "Due 1");
            var expected = '[{"idx":0,"title":"Title 0","desc":"Desc 0","due":"Due 0"},{"idx":1,"title":"Title 1","desc":"Desc 1","due":"Due 1"}]'
            $scope.exportList();
            expect($scope.todoListJSON).toEqual(expected);
        });
    });

    describe('$scope.exportList', function() {
        it('Exports current items as JSON', function() {
            var $scope = {};
            var controller = $controller('todoListController', {$scope: $scope});
            $scope.todoList = [];
            $scope.addItem("Title 0", "Desc 0", "Due 0");
            $scope.addItem("Title 1", "Desc 1", "Due 1");
            var expected = '[{"idx":0,"title":"Title 0","desc":"Desc 0","due":"Due 0"},{"idx":1,"title":"Title 1","desc":"Desc 1","due":"Due 1"}]'
            $scope.exportList();
            expect($scope.todoListJSON).toEqual(expected);
        });
    });

    describe('$scope.importList', function() {
        it('Exports current items as JSON', function() {
            var $scope = {};
            var controller = $controller('todoListController', {$scope: $scope});
            var input = '[{"idx":0,"title":"Title 0","desc":"Desc 0","due":"Due 0"},{"idx":1,"title":"Title 1","desc":"Desc 1","due":"Due 1"}]'
            $scope.importList(input);
            var expected = [{"idx":0,"title":"Title 0","desc":"Desc 0","due":"Due 0"},{"idx":1,"title":"Title 1","desc":"Desc 1","due":"Due 1"}]
            console.log($scope.todoList);
            expect($scope.todoList).toEqual(expected);
        });
    });
});