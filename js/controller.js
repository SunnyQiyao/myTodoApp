(function(angular){
   'use strict'
   /**
    * 控制器模块:保留简单的业务逻辑,只需要调用数据服务种操作数据的方法,
      具体的数据操作交给数据服务来完成
      跟$scope相关的保留在控制器中
    */
   angular
     .module('todoApp.controller',[])
     .controller('TodoController',['$scope','$location','TodoServe',TodoController])

     function TodoController($scope,$location,TodoServe){
         var vm=$scope;
         //-----------------------------1.展示任务列表-------------------------------
         var todoList=TodoServe.getData();
         vm.todoList=todoList;

        
     }
})(angular)