export function practice(){
    //Function Expression Example
    var x = function(a,b) {return a*b};
    var z = x(4,5);
    console.log(z);

    //Function Constructor Example
    var x = new Function("a","b", "return a*b");
    var z = x(4,5);
    console.log(z);

    //Self Invoking functions
    (function () {
        console.log("Hello! I called myself");
    })();

    //Arguments object
    function findMax() {
        var i;
        var max = -Infinity;
        for(i = 0; i < arguments.length; i++) {
            if (arguments[i] > max) {
            max = arguments[i];
            }
        }
        return max;
    } 
    var x = findMax(44, 75, 62);
    console.log(x);

    //Invoking Object as a Method
    var myObject = {
        firstName:"Reena",
        lastName: "Sharma",
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    }
    console.log(myObject.fullName()); 

    //Invoking a function with a Constructor
    function myFunction(arg1, arg2) {
        this.firstName = arg1;
        this.lastName  = arg2;
    }

    var x = new myFunction("Reena","Sharma")
    console.log(x.firstName); 
    console.log(x.lastName); 

    //call() method example
    var person = {
        fullName: function(city, country) {
            return this.firstName + " " + this.lastName + " lives in " + city + ", " + country;
        }
    }

    var person1 = {
        firstName:"John",
        lastName: "Doe"
    }

    var person2 = {
        firstName:"Mary",
        lastName: "Doe"
    }

    var x = person.fullName.call(person2, "Ahmedabad", "India"); 
    var y = person.fullName.apply(person1, ["Gandhinagar", "India"]);
    console.log(x);
    console.log(y);

    //Nested Functions
    var x = add();
    console.log(x);
    function add() {
        var counter = 0;
        function plus() {counter += 1;}
        plus();  
        return counter; 
    }

    //Function Closure
    var add = (function () {
        var counter = 0;
        return function () {counter += 1; return counter;}
    })();

    function myFunction(){
        document.getElementById("demo").innerHTML = add();
    }

    //Class
    class Car {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        }
        age() {
            let today = new Date();
            let years = today.getFullYear() - this.year;
            return years;
        }

        ageNew(today) {
            let years = today - this.year;
            return years;
        }
    }
    let today = new Date();
    let years = today.getFullYear();
    var myCar = new Car("Scala", "2017");
    console.log(myCar.name + " " + myCar.year + " " + myCar.age());
    console.log(myCar.name + " " + myCar.year + " " + myCar.ageNew(years));

    //Class Inheritance
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
        vegeName() {
            return 'I have a ' + this.name;
        }
    }

    class Details extends Vegetable {
        constructor(name, color) {
            super(name);
            this.color = color;
        }
        vegeDetails() {
            return this.vegeName() + ' of ' + this.color + ' color';
        }
        
        get vDetails() {
            return this.color;
        }

        set vDetails(x) {
            this.color = x;
        }

        static hello(x) {
            return "Hello!! " + x.color;
        }
    }

    var myVege = new Details('Brinjal', 'Purple');
    console.log(myVege.vegeDetails());
    console.log(myVege.vDetails);
    myVege.vDetails = 'Orange';
    console.log(myVege.vDetails);
    console.log(Details.hello(myVege));

    //Displaying objects using Object.values()
    var person = {name:"John", age:50, city:"New York"};
    var myArray = Object.values(person);
    console.log(myArray.toString());

    //Displaying objects using JSON.stringify()
    var person = {name:"John", age:function() { return 30; }, city:"New York", today: new Date()};
    person.age = person.age.toString();
    var myString = JSON.stringify(person);
    console.log(myString);
    var arr = ["John", "Peter", "Sally", "Jane"];
    var myString = JSON.stringify(arr);
    console.log(myString);

    //Object.defineProperty() to use get and set
    var obj = {counter : 0};
    Object.defineProperty(obj, "reset", {
    get : function () {this.counter = 0;}
    });
    Object.defineProperty(obj, "increment", {
    get : function () {this.counter++;}
    });
    Object.defineProperty(obj, "decrement", {
    get : function () {this.counter--;}
    });
    Object.defineProperty(obj, "add", {
    set : function (value) {this.counter += value;}
    });
    Object.defineProperty(obj, "subtract", {
    set : function (value) {this.counter -= value;}
    });

    obj.reset;
    obj.add = 15;
    obj.subtract = 10;
    obj.increment;
    obj.increment;
    obj.increment;
    obj.increment;
    obj.decrement;
    obj.decrement;
    console.log(obj.counter);

    //Object.defineProperty()
    var task = {};
    Object.defineProperty(task, 'text', {
        value:"get this task done!"
    });
    console.log(task.text);

    var task = {};
    Object.defineProperty(task, 'text', {
        value:"get this task done!",
        writable: true
    });
    console.log(task.text + " ...NOW!");

    var task = {};
    Object.defineProperty(task, 'text', {
        value:"get this task done!",
        enumerable: true
    });
    for(var f in task) {
        console.log(f);
    }

    var task = {};
    Object.defineProperty(task, 'text', {
        value:"get this task done!",
        configurable: true
    });
    Object.defineProperty(task, 'text', {
        value:"Done!"
    });
    console.log(task.text);

    //Object.defineProperties()
    var task = {};
    Object.defineProperties(task, {
        'text': {
            value: 'New Task'
        },
        'dueDate': {
            value: '2/4/2021'
        }
    });
    console.log(task.text + ' Due: ' + task.dueDate);

    var task = {};
    Object.defineProperties(task, {
        'text': {
            value: 'New Task'
        }
    });
    var descriptor = Object.getOwnPropertyDescriptor(task, 'text');
    console.log(descriptor);

    //hasOwnProperty()
    var task = {
        name: 'Top Secret Project',
        dueDate: '2/4/2021'
    };
    console.log(task.hasOwnProperty('name'));
    console.log(task.hasOwnProperty('toString'));
    console.log(task.__proto__.hasOwnProperty('toString'));
    console.log(Object.prototype.isPrototypeOf(task));

    //Prototype Practice
    function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }

    Person.prototype.nationality = "Indian";
    Person.prototype.name = function() {
        return this.firstName + " " + this.lastName
    };

    var my = new Person("Reena", "Sharma", 25, "brown");
    console.log("My nationality is " + my.nationality);
    console.log("My name is " + my.name());

    console.log(this === window)

    //Object.create() for prototype
    var project = {
        securityLevel: 2
    };
    var secretProject = Object.create(project);
    console.log(secretProject.securityLevel);
    console.log(secretProject.__proto__ === Object.prototype);
    console.log(secretProject.__proto__.__proto__ === Object.prototype);
    console.log("securityLevel" in secretProject);
    console.log("toString" in secretProject);
    console.log("securityLevel" in Object.prototype);


    function myFunc() { 
        var sidebarContent = document.getElementById("sidebar"); 
        sidebarContent.classList.toggle("active");
        return false; 
    }
}