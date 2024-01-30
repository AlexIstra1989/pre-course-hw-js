let passport = {
    name: "Petr",
    surname: "Petrov",
};

let document = Object.assign({}, passport);

document.name = 'Ivan';

console.log(passport.name);
console.log(document.name);
