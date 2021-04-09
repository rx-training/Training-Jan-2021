async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
      setTimeout(function() { myResolve("Hii"); }, 3000);
    });
    let x = await myPromise;
    console.log(x)
  }
  
  myDisplay();