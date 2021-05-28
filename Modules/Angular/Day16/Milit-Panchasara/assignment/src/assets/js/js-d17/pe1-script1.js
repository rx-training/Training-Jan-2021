var temp = 0;
        window.addEventListener("resize", changeColor);
        window.addEventListener("click", changeColor);
        document.getElementById('hoverButton').addEventListener('mousemove', changeColor);

        function changeColor(){
            (temp%2 == 0) ? document.getElementsByTagName('body')[0].style.color = 'blue' : document.getElementsByTagName('body')[0].style.color = 'red'; 
            temp++;
            console.log('size Changed');
        }