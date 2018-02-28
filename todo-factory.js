(function(){
    'use strict';

    angular
    .module('myApp')
    .factory('Factory', Factory);

    function Factory(){
        var tasks = [
            'Bind the input with a paragraph tag',
            'Loop an array of objects. You can just use a dummy data',
            'Show a sample div if a certain variable is true.',
            'Show an alert on button click',
            'Make a simple usage sample of ng-select',
            'Make a simple factory.',
            'Make a simple component.',
            'Make a simple directive (it is up to you what you’ll make)'
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