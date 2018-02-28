(function(){
    angular.module('myApp')
    .component('todo',Compo());

    Compo.$inject= ['Factory']
    
    function Compo(){
        var component = {
            template: "<div class = 'row'>"+
                      " <div class = 'col-lg-5'>"+
                      "     <h3>TODO</h3>"+
                      " </div>"+          
                      "</div>"+
                      "<div class = 'row'>"+
                      " <div class = 'col-lg-5'>"+
                      "     <div class = 'container-left'>"+
                      "         <table id = 'todoList'>"+
                      "             <tr ng-repeat='tasks in cc.tasks'>"+
                      "                 <td>"+
                      "                     {{tasks}} "+
                      "                </td>"+
                      "           <tr>"+
                      "        </table>   "+                 
                      "   </div>"+
                      " </div>   "+        
                      "</div>"+
                      "<div class = 'row'>"+
                      "      <div class = 'col-lg-4'>"+
                      "         <input type='text' class = 'form-control' ng-model = 'txtTodo'>   "+             
                      "      </div>"+
                      "     <div class = 'col-lg-2'>"+
                      "         <button ng-click='cc.newTask(txtTodo); txtTodo = null' class = 'btn btn-warning'>Post </button>"+
                      "          <button ng-click='cc.clearArray()' class = 'btn btn-Danger'>Clear </button>"+
                      "     </div>"+          
                      "  </div>",
                      
            controller: ComponentController, 
            controllerAs: 'cc'                    
        };
        return component;

        
        function ComponentController(Factory){
            vm = this;
            vm.tasks = [];
            vm.tasks = Factory.showTasks();
            vm.newTask = newTask;
            vm.clearArray = clearArray;
    
            function newTask(todo){
                vm.tasks.push(todo)
            }
            
            function clearArray(){
                vm.tasks = []
            } 
        }
    }
})();