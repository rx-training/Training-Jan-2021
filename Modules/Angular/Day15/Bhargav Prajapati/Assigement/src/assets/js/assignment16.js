
    function validation() {
        var str = document.getElementById("checked").value;
        var str1 = str.trim(" ");
        var str2 = str1.split("-");
        var month = parseInt(str2[0]);
        var day = parseInt(str2[1]);
        var year = parseInt(str2[2]);
        temp = 0;
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            if (day > 31) {
                alert("please enter valid date");
                temp = 1;
            }
        }
        else if (month == 4 || month == 6 || month == 9 || month == 11) {
            if (day > 30) {
                alert("please enter the valid date");
                temp = 1;
            }

        }
         else if (month == 2) {
            if (year % 4 != 0) {
                if (day < 29) {
                    alert("correct date!");
                    temp=1;
                    return false;
                }
                else {
                    alert("please enter valid date!");
                    temp=1;
                    return false;
                }
            }
        }


            else {
                alert("please enter the valid month");
                temp = 1;
            }

            if (temp == 0) {
                alert("date is validate")
            }





        }
