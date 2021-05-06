/// <reference path = "Icompany.ts" />
/// <reference path = "IApplicant.ts" />
import {Interview} from "./Interview";

export var vacancy : Company.ICompany[] = [{Vacancyid : 1,VacancyPosition:".Net",VacancyNumber:2},
                                    {Vacancyid : 2,VacancyPosition:"php",VacancyNumber:2},
                                    {Vacancyid : 3,VacancyPosition:"node",VacancyNumber:2}];


export var applicant : Company.IApplicant[] =
[{ApplicantId:1,ApplicantName:"Jevik",ApplicantGraduationPercentage:70,ApplyForDesignation:".net"},
{ApplicantId:2,ApplicantName:"Pratik",ApplicantGraduationPercentage:50,ApplyForDesignation:"node"},
{ApplicantId:3,ApplicantName:"Tirath",ApplicantGraduationPercentage:80,ApplyForDesignation:".net"},
{ApplicantId:4,ApplicantName:"Sagar",ApplicantGraduationPercentage:90,ApplyForDesignation:"php"},
{ApplicantId:5,ApplicantName:"Mann",ApplicantGraduationPercentage:78,ApplyForDesignation:"ruby"},
{ApplicantId:6,ApplicantName:"Gopal",ApplicantGraduationPercentage:88,ApplyForDesignation:".net"},
{ApplicantId:7,ApplicantName:"Rupin",ApplicantGraduationPercentage:75,ApplyForDesignation:"node"},
{ApplicantId:8,ApplicantName:"Arjun",ApplicantGraduationPercentage:45,ApplyForDesignation:"Php"},
{ApplicantId:9,ApplicantName:"Shrina",ApplicantGraduationPercentage:92,ApplyForDesignation:".net"}]

export var Interviewer : Interview[] =
[{id:1,name:"Mr.P"}]