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

          //-----------------------------3.删除任务---------------------------
          vm.del=TodoServe.del;

          //  ---------------------------4.修改任务-------------------------------
         /**
          * 思路:双击任务元素,给当前西添加 editing类
            给$scope添加一个editingId,用来记录当前正在修改项的id值,默认值为 -1
            双击某一任务,给当前项的id 赋值为editingId ,此时会引起数据的变化
            那么页面中与editingId相关的指令都会被重新计算,因为editingId==todo.id,
            所以当前双击的这一项的id 就和 editingId相同,那么当前项就会添加这个类
          */
          vm.editingId=-1;
          vm.edit=function(id){
              vm.editingId=id;
          };
          /**
           * 编辑文本框,通过 todo.name与数据双向绑定,当在视图中修改了任务名称之后,数据也会跟着变化
           * 回车之后,执行vm.editingId=-1;数据发生变化,会重新计算 editingId==todo.id
           * 此时,所有任务项的 id 和editingId 都不相同,所以,会将这个类移除掉
           */
          vm.editSave=function(){
              vm.editingId=-1;

              TodoServe.save();
          };

           //-----------------5.切换任务选中状态(单个或者批量-->全选全不选)-----------------
           vm.isCheckedAll=false;
           vm.checkAll=function(){
               TodoServe.checkAll(vm.isCheckedAll);
           };


           //-------------------6.清除已完成的任务---------------------------------------
           vm.delCompleted=TodoServe.delCompleted;

           //------------------6.1 控制清除按钮的展示和隐藏------------------------------
           //只要有一项任务被选中就显示 Clear completed 按钮,如果都没有选中,就返回ret 为false ,该按钮就隐藏
           vm.isShow=TodoServe.isShow;

        
     }
})(angular)