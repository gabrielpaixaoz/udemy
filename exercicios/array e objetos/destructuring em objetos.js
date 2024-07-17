const userDetails = {
    firstName : "Matheus",
    lastName : "Battisti",
    job: "Programador",
};

const {firstName, lastName, job} = userDetails;

console.log(firstName,lastName,job);

const{firstName: primeiroNome} = userDetails;

console.log(primeiroNome)