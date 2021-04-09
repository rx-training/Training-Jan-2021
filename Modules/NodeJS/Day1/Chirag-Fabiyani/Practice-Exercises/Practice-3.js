function myDisplayer(some) {
    console.log(some)
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 1;
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );