"use strict";

const adalaber1= {
    name: "Susana", 
    age:34, 
    job:"periodista",
};
console.log(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`);

adalaber1.run=(action)=> `Estoy ${action}.`;
console.log(adalaber1.run("corriendo"));

adalaber1.runAMarathon=(distance) => `Estoy corriendo un maratón de ${distance} kilómetros.`;
console.log(adalaber1.runAMarathon(50));

const adalaber2= {
    name: "Rocío",
    age:25, 
    job: "actriz",
};
console.log(`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`)