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

            //-----------------------------2.添加数据-----------------------------
            //  service方法中的函数参数，是一个构造函数，通过this添加成员
            this.add=function(taskName){
                var id,
                    length=todoList.length;
                //如果数组中没有值,那么添加项的id就是 1
                //反之,如果有值,那么就取数组中最后一项的 id ,再加 1
                if(length===0){
                    id=1
                }else{
                    id=todoList[todoList.length-1].id+1
                }
                //将新添加的内容加入到任务列表中
                todoList.push({id:id,name:taskName,isCompleted:false});

                that.save();
            };
           

       }])
 })(angular)