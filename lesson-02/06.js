let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

deepclone = obj => {
    let cloned = {};
    for (i in obj) cloned [i] = typeof obj[i] == 'object' ? deepclone(obj[i]) : obj[i];
    return cloned;
}

let passportWithAddress2 = deepclone(passportWithAddress);

passportWithAddress2.address.city = "Bobryisk"


console.log(passportWithAddress.address.city);
console.log(passportWithAddress2.address.city);