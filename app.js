(function(){
    angular.module('myApp',[])
    .controller('MainController',MainController);
    MainController.$inject = ['Factory'];

    function MainController(Factory){
        var vm = this;
        vm.newTask = newTask;
        vm.clearArray = clearArray;
        vm.tasks = [];
        vm.tasks = Factory.showTasks();


        function newTask(todo){
            vm.tasks.push(todo)
        }
        
        function clearArray(){
            vm.tasks = []
        }         

    }
    
})();

