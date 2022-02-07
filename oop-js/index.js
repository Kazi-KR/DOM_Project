// function Person(firstName,lastName,dob){
//    this.firstName=firstName;
//    this.lastName=lastName;
//    this.bithDay=new Date(dob);
// }
// Person.prototype.calculateAge=function(){
//     const diff=Date.now()-this.bithDay.getTime();
//     const ageDate=new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear()-1970);
// }

// Person.prototype.getFullName=function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// const kazi=new Person('Kazi','Kamruzzaman','4-02-2000');

// console.log(kazi.getFullName());
// console.log(kazi.calculateAge());

class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
    constructor(firstName,lastName,phone,membership){
        super(firstName,lastName);
        this.phone=phone;
        this.membership=membership;
    }
}

const K=new Customer('Kazi','Kamruzzaman','01710-564470','Platinum');

console.log(K.greeting());