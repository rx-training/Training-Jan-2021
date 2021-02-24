'use strict';
function index(){
    // different types of assigning json objects
    var project = new Object();
    project.name = "Radix Project";
    project.securityLevel = 15;
    project.updateDueDate = function(){
        return true;
    };

    var project2 = {};
    project2.name="radixWEb";

    var project3 = { 
        name : "name",
        security : 15,
        updateDueDate : function(){return true;},
        team : ['one', 'two', 'three']
    };
    var project4 ={
        tasks:[
            {
                taskname : 'first'
            },
            {
                taskname : 'second'
            }
        ]
    };
    var field = 'securityLevel';
    document.getElementById("json").innerHTML= "Project.name : "+ project.name+
        "<br>Project.updateDueDate() : "+project.updateDueDate()+
        "<br>Project['securityLevel'] : " + project["securityLevel"]+
        "<br>Project[field] : "+project[field]+
        "<br>Project2.name : "+project2.name+
        "<br>Project3.name : "+project3.name+
        "<br>Project3.team[2] : "+project3.team[2]+
        "<br>Project4.tasks[1].taskname : "+project4.tasks[1].taskname;
}
function prototypeProperty(){

    var project ={
        security : 2
    };
    var secretProject = Object.create(project);

    document.getElementById("prototype").innerHTML =
    "SectretProject.security = "+secretProject.security+
    "<br>typeof sectretproject.tostring = "+typeof secretProject.toString;

    document.getElementById("prototype2").innerHTML ="<br>secretProject.__proto__ === Object.protoType = " +secretProject.__proto__.__proto__ === Object.prototype;
}
function defineProperty(){

    var task = {};
    Object.defineProperty(task,'text',{
        value : 'Get this job done!',
        writable : true // without this it would be set to readonly by default
    });
    task.text = task.text + '..... NOW!';

    var task2 = {};
    Object.defineProperty(task2, 'text',{
        value:'Get this job done',
        enumerable : true // by default it would be false
    });
    for (var f in task){
        console.log(f);
    }

    var task3 = {};
    Object.defineProperty(task3, 'text', {
        value : 'get this job done ! ',
        configurable : true
    });
    Object.defineProperty(task3,"text",{
        value : "Done !"
    });

    var task4 = {
        _dueDate : '1/15/16'
    };
    Object.defineProperty(task4, 'dueDate', {
        get : function(){
            return this._dueDate;
        },set : function(newValue){
            this._dueDate = newValue ;
        }
    });
    task4.dueDate = '2/2/16';

    var task5 = {};
    Object.defineProperties(task5 , {
        'text' : {
            value : 'New Task'
        },
        'dueDate' : {
            value : '1/15/12'
        }
    });

    var task6 = {};
    Object.defineProperties(task6,{
        'text' : {
            value : 'new task'
        }
    });
    var descriptor = Object.getOwnPropertyDescriptor(task6, 'text');
    document.getElementById("define").innerHTML ="task.text : "+task.text+
    "<br>Task3 text confiurable : " + task3.text +
    "<br>Task4 Due date : " +task4.dueDate +
    "<br>task5 text : "+task5.text+
    "<br>task5 due date : " + task5.dueDate+
    "<br>Task6 descriptor text : "+descriptor;
}

function miscellaneous(){
    var project = {
        name  : 'Top Secret Project',
        dueDate : '1/1/2016'
    };
    var secret = Object.create(project);
    document.getElementById("miscellaneous").innerHTML =
    "project.hasOwnProperty('name') : "+project.hasOwnProperty('name')+
    "<br>project.hasOwnProperty('toString') : "+project.hasOwnProperty('toString')+
    "<br>project.__proto__.hasOwnProperty('name') : "+ project.__proto__.hasOwnProperty('toString')+
    "<br>isPrototypeOf(project) : "+Object.prototype.isPrototypeOf(project)+
    "<br>Object.prototype.isPrototypeOf(secret) : "+Object.prototype.isPrototypeOf(secret);
    
}