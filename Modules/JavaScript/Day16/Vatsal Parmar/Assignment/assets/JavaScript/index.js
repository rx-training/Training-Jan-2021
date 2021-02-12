function checkDate(input1, ans, wrng) {
  var a = input1.value;
  if (a == "") {
    wrng.innerHTML = "Enter Valid Date";
    ans.innerHTML = "";
    return;
  }
  var date = a.trim().split("-");

  if (date.length > 3 || date.length < 2) {
    wrng.innerHTML = "Enter Valid Date";
    ans.innerHTML = "";
    return;
  } else {
    if (date[0] > 0 && date[0] <= 12) {
      if (date[1] > 0 && date[1] <= 31) {
        if (date[0] == 2) {
          if (date[2].length == 4) {
            if (date[2] % 4 == 0) {
              if (date[1] > 0 && date[1] <= 29) {
                ans.innerHTML = "Valid Date : " + a;
                wrng.innerHTML = "";
                return;
              } else {
                wrng.innerHTML =
                  "Please enter valid date in february(leap year)";
                ans.innerHTML = "";
                return;
              }
            } else {
              if (date[1] > 0 && date[1] <= 28) {
                ans.innerHTML = "Valid Date : " + a;
                wrng.innerHTML = "";
                return;
              } else {
                wrng.innerHTML = "Please enter valid date in february";
                ans.innerHTML = "";
                return;
              }
            }
          } else {
            wrng.innerHTML = "Please enter valid in year.";
            ans.innerHTML = "";
            return;
          }
        } else if (
          date[0] == 1 ||
          date[0] == 3 ||
          date[0] == 5 ||
          date[0] == 7 ||
          date[0] == 8 ||
          date[0] == 10 ||
          date[0] == 12
        ) {
          if (date[2].length == 4) {
            if (date[1] > 0 && date[1] <= 31) {
              ans.innerHTML = "Valid Date : " + a;
              wrng.innerHTML = "";
              return;
            } else {
              wrng.innerHTML = "Please enter valid day";
              ans.innerHTML = "";
              return;
            }
          } else {
            wrng.innerHTML = "Please enter valid year.";
            ans.innerHTML = "";
            return;
          }
        } else {
          if (date[2].length == 4) {
            if (date[1] > 0 && date[1] <= 30) {
              ans.innerHTML = "Valid Date : " + a;
              wrng.innerHTML = "";
              return;
            } else {
              wrng.innerHTML = "Please enter valid day";
              ans.innerHTML = "";
              return;
            }
          } else {
            wrng.innerHTML = "Please enter valid year.";
            ans.innerHTML = "";
            return;
          }
        }
      } else {
        wrng.innerHTML = "Please enter valid day";
        ans.innerHTML = "";
        return;
      }
    } else {
      wrng.innerHTML = "Please enter valid month";
      ans.innerHTML = "";
      return;
    }
  }
}
