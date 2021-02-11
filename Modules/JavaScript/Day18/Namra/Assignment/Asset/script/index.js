function assignPage(){
    var eId = parseInt(document.getElementById("EmployeeId").value);
    var ePass = document.getElementById("EPass").value;

    if(eId == 10001 && ePass == "namra@123"){
        window.location.assign("startExam.html");
    }
    else{
        alert("Invalid password or user");
    }
    return false;
}
function startExam(){
    window.location.assign("ExamPaper.html");
}
