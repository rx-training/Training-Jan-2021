function changeContent(){
    document.getElementById("changeLabel").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptates fugit cum veritatis quidem optio quam cupiditate possimus rem modi? Molestiae voluptatum cumque possimus beatae voluptatem earum dignissimos minus quidem?";
    return false;
}
function changePractice2(value){
    document.getElementsByTagName("p")[value].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptates fugit cum veritatis quidem optio quam cupiditate possimus rem modi? Molestiae voluptatum cumque possimus beatae voluptatem earum dignissimos minus quidem?";
}
function changePractice3(value){
    document.getElementsByClassName("class")[value].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptates fugit cum veritatis quidem optio quam cupiditate possimus rem modi? Molestiae voluptatum cumque possimus beatae voluptatem earum dignissimos minus quidem?";
}
function imgPractical4(){
    document.getElementById("image").src="Asset/Image/Image2.jpg";
}
function displayPractical5(){
    document.getElementById("display").innerHTML += " : "+document.getElementById("changeValue").value;
}
function changePractical5(){
    document.getElementById("changeValue").value="changed value";
    document.getElementById("display").innerHTML += " : "+document.getElementById("changeValue").value;
}
function practice6()
{
    document.getElementById("para").style.color="green";
}
function practice7()
{
    document.getElementById("para7").style.display="none";
}
function displayPractice7()
{
    document.getElementById("para7").style.display="inline-flex";
}
function practice8(){
    window.location.assign("https://radixweb.com/");
}
function detailPractice8(){
    document.getElementById("locationPractice8").innerHTML = "Page Location : " + window.location.href + "<br>Page Hostname : " + window.location.hostname + "<br>Page Path : " + window.location.pathname + "<br>Page Protocol : "+window.location.protocol + "<br>Port Number : " + window.location.port ;
}
function practice9(){
    window.history.back();
}
