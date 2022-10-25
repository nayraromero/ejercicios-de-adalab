"use strict";
const adalaber1= {
    name: "María", 
    age:34, 
    job:"periodista",
};
const adalaber2= {
    name: "Rocío",
    age:25, 
    job: "actriz",
};
adalaber1.showBio=function(){
    return "Hola, mi nombre es "+this.name +", tengo "+ this.age+ " años y soy "+this.job
};
adalaber2.showBio=function(){
    return "Hola, mi nombre es "+this.name +", tengo "+ this.age+ " años y soy "+this.job
};
console.log(adalaber1.showBio());
console.log(adalaber2.showBio());

