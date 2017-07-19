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

         //-----------------------------2.添加任务----------------------------------
         vm.taskName='';  //初始默认为空
         vm.add=function(){
             if(vm.taskName.trim()===''){
                 return;
             }
             TodoServe.add(vm.taskName);  //跟页面内容相关的通过参数传入

             vm.taskName='';   //内容添加到页面之后清空输入框
         };

        
     }
})(angular)