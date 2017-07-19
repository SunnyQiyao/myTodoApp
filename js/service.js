 (function(angular){
     'use strict'
     //服务模块,主要用于操作数据,实现数据的增删改查

     angular  
       .module('todoApp.service',[])
       .service('TodoServe',['$window',function($window){
            //------------------1.展示数据---------------------------------
            // var todoList = [
            //     { id: 1, name: '音乐', isCompleted: false },
            //     { id: 2, name: '阅读', isCompleted: true },
            //     { id: 3, name: 'party', isCompleted: false }
            // ];
            //从localStorage中获取数据 
            var localStorage=$window.localStorage;
            var todoList=JSON.parse(localStorage.getItem('todo'))||[];

            //保存数据
            // service 方法中的函数参数是一个构造函数,通过this添加成员
            this.save=function(){
                localStorage.setItem('todo',JSON.stringify(todoList));
            }
            //获取保存的数据
            this.getData=function(){
                return todoList;
            }

            var that=this;
           

       }])
 })(angular)