(function(){
    'use strict';

    angular
    .module('myApp')
    .factory('Factory', Factory);

    function Factory(){
        var tasks = [
            'Angelina Jolie',
            'Jennifer Lawrence',
            'Brooklyn Decker',
            'Bailee Madison',
            'Drew Barrymore'
        ];

        function showTasks(){
            return tasks;
        }
        var factory = {
            showTasks: showTasks        
        };

        return factory;
    }

    

})();