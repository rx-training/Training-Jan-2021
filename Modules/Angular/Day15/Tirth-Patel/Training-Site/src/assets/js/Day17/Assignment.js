function validate() {
    var i = /^[0-9]{5}$/;
    var m = /^[0-9]{10}$/;
    var id = i.test(document.getElementById('empId').value);
    var mb = m.test(document.getElementById('numbers').value);
    var num = document.getElementById("numbers").value;
    console.log(num);
    if(id === false)
    {
        alert("enter 5 digit ID only");
        return false;
    }
    if(mb === false)
    {
        alert("enter 10 digit contact number only");
        return false;
    }

    if(documnet.getElementById("empname").value ==""){
        alert("Enter Name please");
    }
    if(documnet.getElementById("empage").value ==""){
        alert("Enter AGE please");
    }
    if(documnet.getElementById("empdes").value ==""){
        alert("Enter Designation please");
    }
    if(documnet.getElementById("empsal").value ==""){
        alert("Enter Salary please");
    }
    if(documnet.getElementById("email").value ==""){
        alert("Enter Email please");
    }
}