export interface Vacancy {
    id: number,
    departmentName: string,
    designation: string,
    vacancyNo: number
}

export class Vacancies {

    createVacancy(input: Vacancy):void {
        vacancyList.push(input);
    }

    decreaseVacancyNo(id:number): Vacancy {
        for (const key in vacancyList) {
            if(vacancyList[key].id == id) {
                vacancyList[key].vacancyNo -= 1;
                return vacancyList[key];
            }
        }
        return;
    }

    viewAllVacancies() {
        console.log();
        console.log("VACANCIES:");
        vacancyList.forEach(vacancy => {
            console.log(`ID: ${vacancy.id}, Department: ${vacancy.departmentName}, Designation: ${vacancy.designation}, No. of vacancies: ${vacancy.vacancyNo}`);
        });
        console.log();
    }

    viewVacancy(id:number) {
        console.log();
        for (const key in vacancyList) {
            if(vacancyList[key].id == id) {
                let vacancy = vacancyList[key];
                console.log(`ID: ${vacancy.id}, Department: ${vacancy.departmentName}, Designation: ${vacancy.designation}, No. of vacancies: ${vacancy.vacancyNo}`);
                console.log();
                return;
            }
        }
        console.log("Invalid vacancy id: "+id);
        console.log();
    }
}

export var vacancyList:Vacancy[] = [
    {
        id:1,
        departmentName:".NET",
        designation:"Senior Developer",
        vacancyNo: 5
    },
    {
        id:2,
        departmentName:"PHP",
        designation:"Junior Developer",
        vacancyNo: 10
    }
]