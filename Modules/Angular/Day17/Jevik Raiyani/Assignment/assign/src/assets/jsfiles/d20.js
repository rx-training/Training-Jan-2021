
    var array = [];

    function getData(id,name,price,qty)
    {
        var obj = {"ProductID":id,"ProductName":name,"Price":price,"Quntity":qty}
        array.push(JSON.stringify(obj));
        localStorage.setItem("key",array); 
        
       
    }
    
    function getFetchData()
    {
        console.log(localStorage.getItem("key"));
    }

    
    //getArrayData("item.json");
    async function getArrayData(file)
    {
        let x = await fetch(file);
        let y = await x.json();
        var tmp = "";
        for(var i=0;i<y.length;i++)
        {
            tmp += "<tr>";
            tmp += "<td>"+ y[i].ProductID +"</td>";
            tmp += "<td>"+ y[i].ProductName +"</td>";
            tmp += "<td>"+ y[i].Price +"</td>";
            tmp += "<td>"+ y[i].Quantity +"</td>";
            tmp += '<td><button class="btn btn-success" onclick="getData('+"'"+y[i].ProductID+"'"+','+"'"+y[i].ProductName+"'"+','+"'"+y[i].Price+"'"+','+"'"+y[i].Quantity+"'"+')">Add Cart</button></td></tr>';
             tmp += "<tr>";
        }
        document.getElementById("data").innerHTML = tmp;
        localStorage.clear();
    }