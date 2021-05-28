function assignPage(pathname){
    var eId = parseInt(document.getElementById("EmployeeId").value);
    var ePass = document.getElementById("EPass").value;

    if(eId == 10001 && ePass == "namra@123"){
        window.history.pushState(
            {},
            pathname,
            window.location.origin + pathname
        )
        rootDiv.innerHTML = routes[pathname]
    }
    else{
        alert("Invalid password or user");
    }
    return false;
}
function startExam(){
    window.location.assign("ExamPaper.html");
}
