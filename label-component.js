(function(){
    angular.module('myApp')
    .component('todoLabel',Compo());

    function Compo(){
        var component = {
            template: "<div class = 'row'>"+
                        "<div class = 'col-lg-5'>"+
                            "<h3>TODO</h3>"+
                        "</div>"+          
                      "</div>"                
        };
        return component;
    }
})();