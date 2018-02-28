<html ng-app="myApp">
    <head>
        <style>
            .container-left {
                border:1px;
                border-style:groove;
                min-height:50vh;
            }
            .container-right {
                border:1px;
                border-style:dotted;
                min-height:50vh;
            }            
        </style>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        <title>
            Todo App
        </title>
    </head>
    <body ng-controller="MainController as mc">
        <todo-label></todo-label>
        <div class = 'row'>
            <div class = 'col-lg-5'>
                <div class = 'container-left'>
                    <table id = "todoList">
                        <tr ng-repeat='tasks in mc.tasks' id = {{tasks}}>
                            <!-- <td>
                                <button class = "btn btn-danger" id = {{tasks}} >DONE</button>
                            </td> -->
                            <td>
                                {{tasks}} 
                            </td>
                        <tr>
                    </table>                    
                </div>
            </div>           
        </div>
        <br>
        <div class = 'row'>
            <div class = 'col-lg-4'>
                <input type="text" class = "form-control" ng-model = "txtTodo">                
            </div>
            <div class = 'col-lg-2'>
                <button ng-click="mc.newTask(txtTodo); txtTodo = null" class = "btn btn-warning">Post </button>
                <button ng-click="mc.clearArray()" class = "btn btn-Danger">Clear </button>
            </div>           
        </div>                      
    </body>
</html>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.js"></script>
<script src="app.js"></script>
<script src="todo-factory.js"></script>   
<script src="label-component.js"></script>   