class Methods {
    //Map Concept
    MappigMethod() {
        console.log("==================Map Example =============================");
        let Mappling = new Map();
        Mappling.set(1, "Jenil");
        Mappling.set(2, "Parth");
        Mappling.set(3, "Malhar");
        Mappling.set(4, "Rohit");
        Mappling.set(5, "Dhoni");
        console.log("Key Value Are Printed :-");
        for (const Mapdata of Mappling.keys()) {
            console.log(`Mappling Key :- ${Mapdata}`);
        }
        console.log("Value Assing to key  Are Printed :-");
        for (const iterator of Mappling.values()) {
            console.log(`Values of Mapping :- ${iterator}`);
        }
        console.log("Has Key Function return  key are present or not");
        console.log(`Status Of Key :- ${Mappling.has(1)}`);
        console.log(`Status of Key :- ${Mappling.has(7)}`);
        console.log("Size Function return the size of the map");
        console.log(`size of Mapping :- ${Mappling.size}`);
        console.log("Delete Method Are used to delete the key pair value from the  Mappling and Return true/false");
        console.log(`Deleted Element Status :- ${Mappling.delete(1)}`);
        console.log(`Deleted Element Status :- ${Mappling.delete(7)}`);
        console.log("After Deleted the size of the mapping");
        console.log(`size Of Mappling :- ${Mappling.size}`);
        console.log("Printed Key pair");
        for (const iterator of Mappling) {
            console.log(iterator[0], iterator[1]);
        }
        console.log("Clear method  remove the everything from the  map");
        Mappling.clear();
        console.log(" Remove All The Data successfully");
    }
    //SetConcept
    SetMethod() {
        console.log("===========================Set Example =================================");
        var set = new Set();
        console.log("Adding the data into the set :- ");
        set.add("Jenil");
        set.add("Parth");
        set.add("Malhar");
        set.add("Rohit");
        set.add("Dhoni");
        for (const iterator of set) {
            console.log(`Set value :- ${iterator}`);
        }
        console.log("Set Has Return the  boolean value if  value is present then return true otherwise return false");
        console.log(`Has Value Status:- ${set.has("Jenil")}`);
        console.log(`Has value Status ${set.has("ABC")}`);
        console.log("sizeof the set :- ");
        console.log(`size of Set value :- ${set.size}`);
        console.log("clear All  values :-");
        set.clear();
        console.log(`successsfully clear data`);
    }
    DateMethod() {
        console.log("===========================Date Example =================================");
        let date = new Date();
        console.log(`Current Date :- ${date}`);
        let date1 = new Date(5000000);
        console.log(`Adding Millisecound :- ${date1} `);
        let date2 = new Date("2020-06-06");
        console.log(`Converted String formet to the Date :- ${date2}`);
        let date3 = new Date(2020, 4, 4, 17, 23, 42, 11);
        date3.setDate(13);
        date3.setMonth(13);
        date3.setFullYear(2020);
        date3.setHours(13);
        date3.setMinutes(13);
        date3.setSeconds(13);
        console.log(`Get Date :- ${date3.getDate()}`);
        console.log(`Get Month :- ${date3.getMonth()}`);
        console.log(`Get FullYear :- ${date3.getFullYear()}`);
        console.log(`Get Hour :- ${date3.getHours()}`);
        console.log(`Set Minute :- ${date3.getMinutes()}`);
        console.log(`Set Secound :- ${date3.getMinutes()}`);
    }
}
var methods = new Methods();
methods.MappigMethod();
methods.SetMethod();
methods.DateMethod();
