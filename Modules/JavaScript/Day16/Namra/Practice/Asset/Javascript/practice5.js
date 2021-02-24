var arr=["Banana","Orange","Apple","Mango"];
var arr1=["cars","BMW"];
var arr2=["Lamber","Ahmedabad"]
function arrayString(){
    document.getElementById("arrayString").innerHTML="Array data: "+arr.toString();
    return false;
}
function joinString(){
    document.getElementById("joinString").innerHTML="Array data: "+arr.join(" * ");
    return false;
}
function popArray(){
    arr.pop();
    document.getElementById("popArray").innerHTML="Array data: "+arr.toString();
    return false;
}
function shiftArray(){
    arr.shift();
    document.getElementById("shiftArray").innerHTML="Array data: "+arr.toString();
    return false;
}
function pushArray(){
    var pushEle = document.getElementById('pushElement').value;
    if(pushEle == "")
    {
        alert("Enter value");
    }
    else{
        arr.push(pushEle);
    }
    document.getElementById("pushArray").innerHTML="Array data: "+arr.toString();
    return false;
}
function unshiftArray(){
    var pushEle = document.getElementById('pushElement').value;
    if(pushEle == "")
    {
        alert("Enter value");
    }
    else{
        arr.unshift(pushEle);
    }
    document.getElementById("unshiftArray").innerHTML="Array data: "+arr.toString();
    return false;
}
function changeElement(){
    arr[0]="kiwi";
    document.getElementById("chnageArray").innerHTML="Array data: "+arr.toString();
    return false;
}
function deleteElement(){
    delete arr[1];
    document.getElementById("deleteArray").innerHTML="Array data: "+arr.toString();
    return false;
}
function spliceArray(){
    var indexVal = parseInt(document.getElementById('indexSplice').value);
    var deleteVal = parseInt(document.getElementById('deleteSplice').value);
    var data = document.getElementById('addSpplice').value;
    if(isNaN(indexVal)==true || isNaN(deleteVal)==true)
    {
        alert("Enter value");
    }
    else{
        arr.splice(indexVal,deleteVal,data)
    }
    document.getElementById("spliceArray").innerHTML="Array data: "+arr.toString();
    return false;
}
function mergeTwo(){
    var arr3=arr.concat(arr1);
    document.getElementById("mergeTwo").innerHTML="Array data: "+arr3.toString();
    return false;
}

function mergeThree(){
    var arr3=arr.concat(arr1,arr2);
    document.getElementById("mergeThree").innerHTML="Array data: "+arr3.toString();
    return false;
}
console.log("Sorted Array:")
arr.sort();
console.log(arr);
console.log("Reversed Array")
arr.reverse();
console.log(arr);
var points=[10,23,42,3,4,34];
points.sort(function(a, b){return a - b});
console.log(points);