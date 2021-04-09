var add = (function () {
    var counter = 0;
    console.log(counter)
    return function () {counter += 1; return counter}
  })();

  function myFunction(){
    add();
  }
  
  myFunction();myFunction();myFunction();