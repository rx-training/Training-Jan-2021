var employee ={
    fild_name:"ABC",
    Address:"PQR",
    Designation:"XCDSS",  
    full_data:function()
    {
        return "<b>Fild Name := </b> " + this.fild_name + "<br><b>Address := </b> "+this.Address+"<br><b>Designation := </b> "+this.Designation
    }          
};
document.getElementById("demo").innerHTML=employee.full_data();