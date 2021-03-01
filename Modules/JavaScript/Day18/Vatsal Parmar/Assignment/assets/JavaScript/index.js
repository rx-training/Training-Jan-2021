async function timer() {
  var s = 0;
  var m = 0;
  var h = 0;

  var t = setInterval(watch, 1000);

  //increseing mins and hrs

  function watch() {
    s++;
    if (s == 60) {
      m++;
      s = 0;
    }
    if (m == 60) {
      m = 0;
      h++;
    }

    var seconds = s < 10 ? "0" + s : s;
    var minutes = m < 10 ? "0" + m : m;
    var hours = h;
    document.getElementById("ans").innerHTML =
      "Time  :  " + "0" + hours + ":" + minutes + ":" + seconds;

    if (hours == 3) {
      clearInterval(t);
    }
  }
  //show wing times up warning
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Time Is Up"), 3 * 60 * 60 * 1000);
  });

  let result = await promise;

  document.getElementById("ans2").innerHTML = result;
}
