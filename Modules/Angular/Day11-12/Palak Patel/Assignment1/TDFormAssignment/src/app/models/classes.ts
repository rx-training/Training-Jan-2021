export class Profile { 
    constructor(public prId:string, public prName:string) {
    }	
} 

export class Technology { 
    constructor(public techId:number, public techName:string) {
    }
} 

export class User {
    userName: string;
    age: number;
    gender: string;
    isMarried: boolean;
    isTCAccepted: boolean;
    profile: Profile;
    technologies: Technology[];
} 