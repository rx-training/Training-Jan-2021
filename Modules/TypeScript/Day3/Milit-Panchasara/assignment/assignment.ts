import {Applicant, Applicants, applicantList} from './Applicant';
import {HiredPerson, HiredPersons, hiredPersonList} from './HiredPerson';
import {Interview, Interviews, interviewList} from './Interview';
import {Person, Persons} from './Person';
import {Vacancy, Vacancies, vacancyList} from './Vacancy';

// VACANCIES //

var vac = new Vacancies();
vac.viewAllVacancies();
vac.viewVacancy(1);

var newVac: Vacancy = {
    id:3,
    departmentName:"NodeJS",
    designation:"Junior Developer",
    vacancyNo: 8
}

vac.createVacancy(newVac);
vac.viewAllVacancies();

// APPLICANTS //

var app = new Applicants();
app.viewAllApplicants();
app.viewApplicant(1);

app.createApplicant({
    id:3,
    name:"John",
    email:"john@g.g",
    appliedDate:'2020-06-01',
    vacancyId:2
});
app.viewAllApplicants();

app.createApplicant({
    id:3,
    name:"John",
    email:"john@g.g",
    appliedDate:'2020-06-01',
    vacancyId:100
});

// INTERVIEWS //

var interviews = new Interviews();
interviews.createInterview({
    id:1,
    applicantId:1,
    type:"Technical1",
    time:'2020-07-01'
});

interviews.createInterview({
    id:2,
    applicantId:1,
    type:"Technical2",
    time:'2020-07-01'
});

interviews.createInterview({
    id:3,
    applicantId:2,
    type:"Technical1",
    time:'2020-07-02'
});

interviews.viewAllInterviews();

interviews.updateInterviewResult(1,true);
interviews.updateInterviewResult(2,false);

interviews.viewAllInterviews();

// HIRED PERSONS //

var hiredPersons = new HiredPersons();

hiredPersons.createHiredPerson({
    id:1,
    name:"John",
    email:"john@g.g",
    hiredDate:'2020-12-01',
    salary:25000
});

hiredPersons.createHiredPerson({
    id:2,
    name:"Mike",
    email:"Mike@g.g",
    hiredDate:'2020-12-01',
    salary:20000
});

hiredPersons.viewAllHiredPersons();
hiredPersons.viewHiredPerson(2);
hiredPersons.viewHiredPerson(20);