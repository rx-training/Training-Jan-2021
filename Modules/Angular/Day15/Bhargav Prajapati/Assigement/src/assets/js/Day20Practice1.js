

console.log("this is fatch Api");

    function getData(){
        url="exercise.json";
        fetch(url).then((response)=>{
            return response.json();

        }).then((data)=>{
            console.log(data);
        })

    }
    getData();