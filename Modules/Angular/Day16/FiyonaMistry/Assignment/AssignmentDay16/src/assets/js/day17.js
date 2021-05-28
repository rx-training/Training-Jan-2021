function onSubmit(){
    console.log("a");
    var id = document.getElementById("emp_id").value;
    const id_regEx = /[0-9]{5}/g;
    if((id.match(id_regEx) == id)){
        alert("Valid Employee Id");
    }
    else{
        alert("Invalid Employee Id");
    }
    return false;
}