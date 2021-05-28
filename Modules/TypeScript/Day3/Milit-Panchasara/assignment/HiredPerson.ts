import {Person} from './Person';

export interface HiredPerson extends Person {
    hiredDate:string,
    salary:number
}

export class HiredPersons {

    createHiredPerson(input: HiredPerson) {
        hiredPersonList.push(input);
    }

    viewAllHiredPersons() {
        console.log();
        console.log("Hired Persons:");
        hiredPersonList.forEach(hiredPerson => {
            console.log(`ID: ${hiredPerson.id}, Name: ${hiredPerson.name}, Email: ${hiredPerson.email}, Hired Date: ${hiredPerson.hiredDate}, Salary: ${hiredPerson.salary}`);
        });
        console.log();
    }

    viewHiredPerson(id:number) {
        console.log();
        for (const key in hiredPersonList) {
            if(hiredPersonList[key].id == id) {
                let hiredPerson = hiredPersonList[key];
                console.log(`ID: ${hiredPerson.id}, Name: ${hiredPerson.name}, Email: ${hiredPerson.email}, Hired Date: ${hiredPerson.hiredDate}, Salary: ${hiredPerson.salary}`);
                console.log();
                return;
            }
        }
        console.log("Invalid person id: "+id);
        console.log();
    }
}

export var hiredPersonList: HiredPerson[] = [];