export function assignment(){
    function checkDate() {
        var userDate = document.getElementById("date").value;
        var trimDate = userDate.trim();
        var date = trimDate.split("-");

        if(userDate == "") {
            alert("Please enter date!");
            return false;
        }
        if(date.length>3 || date.length<2) {
            alert("Please enter valid date!");
            return false;
        }
        if(isNaN(date[0]) || isNaN(date[1]) || isNaN(date[2])){
            alert("Please enter number in date");
            return false;
        }
        if(date[0].length!=2){
            alert("Please enter valid month");
            return false;
        }
        if(date[1].length!=2){
            alert("please enter valid day");
            return false;
        }
        if(date[2].length!=4){
            alert("please enter valid year");
            return false;
        }
        else {
            if(date[1]>0 && date[1]<=31) {
                if(date[0]>0 && date[0]<=12) {
                    if(date[0]==2) {
                        if(date[2]%4 !=0 ) {
                            if(date[1]<29) {
                                alert("correct date!");
                                return false;
                            }
                            else{
                                alert("please enter valid date!");
                                return false;
                            }
                        }
                        else{
                            if(date[1]<30) {
                                alert("correct date!");
                                return false;
                            }
                            else{
                                alert("please enter valid date!");
                                return false;
                            }
                        }
                        
                    }
                    else if(date[0]==1 || date[0]==3 || date[0]==5 || date[0]==7 || date[0]==8 || date[0]==10 || date[0]==12) {
                            if(date[1]<=31) {
                                alert("correct date!");
                                return false;
                            }
                            else{
                                alert("please enter valid date!");
                                return false;
                            }
                    }
                    else {
                        if(date[1]<31) {
                            alert("correct date!");
                            return false;
                        }
                        else{
                            alert("please enter valid date!");
                            return false;
                        }
                    }
                }
                else{
                    alert("please enter valid month!");
                    return false;
                }
            }
            else {
                alert("please enter valid day!");
                return false;
                
            }
        }
    }

    function myFunc() { 
        var sidebarContent = document.getElementById("sidebar"); 
        sidebarContent.classList.toggle("active");
        return false; 
    }
}