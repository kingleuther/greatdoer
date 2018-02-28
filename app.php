<html ng-app="myApp">
    <head>
        <style>
            .container-left {
                border:1px;
                border-style:groove;
                min-height:50vh;
            }     
        </style>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        <title>
            Todo App
        </title>
    </head>
    <body ng-controller="MainController as mc">
    <!-- Magical Component -->
        <todo></todo>
    <!-- Magical Component -->    
    </body>
</html>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.js"></script>
<script src="app.js"></script>
<script src="todo-factory.js"></script>   
<script src="todo-component.js"></script>   