var x = "5" + 2 + 3; // converts everything to string
        console.log(x);
        console.log(typeof(x)); //shows datatype
        //bitwise operators
        x = parseInt("0001",2);
        var z = x << 2;
        console.log(z);
        x = parseInt("1100",2);
        var z = x >> 2;
        console.log(z);
        x = -parseInt("1111",2);
        var z = x >>> 1;  //for negative binary
        console.log(z.toString(2));