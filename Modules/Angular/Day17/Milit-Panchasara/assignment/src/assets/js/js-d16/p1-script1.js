function practice1(){
    var value = document.getElementById('text1').value;
    if(value.trim() == "")
    {
        alert("string is blank");
    }
    else
    {
        alert('string is not blank');
    }
    return false;
}

function practice2(){
    var value = document.getElementById('text2').value;
    if(value.trim() == "")
    {
        alert("string is blank");
    }
    else
    {
        var valuesArray = value.split(',');
        console.log(valuesArray);
    }
    return false;
}

function practice3(){
    var value = document.getElementById('text3').value;
    console.log(value.slice(3,7));
    return false;
}

function practice4(){
    console.log(new Date());
    return false;
}

function practice5(){
    var array = ['Rajkot','Ahmedabad','Surat'];
    console.log(array);
    var lastElem = array.pop();
    console.log("popped element is " + lastElem);
    console.log(array);
    array.push('Delhi');
    console.log(array);
    console.log("length is " + array.length);
    console.log("join array:" + array.join("|"));
    console.log('sorted array tostring: ' + array.sort().toString());
    console.log("array shift applied: " + array.shift());
    console.log(array);
    array.unshift('XYZ', 'ABC');
    console.log('unshift used')
    console.log(array);
    console.log("Array.isArray() ? " + Array.isArray(array));
    console.log('index of mumbai: ' + array.indexOf('mumbai'));
    console.log('index of delhi: ' + array.indexOf('Delhi'));
    var array2 = array.slice(1,3);
    console.log(array2);
    array.splice(1,1,'new1','new2');
    console.log(array);
    return false;
}