function inputData() {
    return {
        count: document.getElementById("numberOfEmp").value,
        age: {
            min: document.getElementById("minAge").value,
            max: document.getElementById("maxAge").value
        }
    };
}

function Main(dtoIn) {
    const maleNames = ["Ondra", "Petr", "David", "Marek", "Stefan", "Štěpán", "Oliver", "Nazar", "Boris", "Filip", "Jakub", "Kuba", "Čestmír", "Vladan", "Břetislav", "Pravoslav", "Zdenek", "Miloš", "Hynek", "Mojmír", "Valentin",];
    const maleSurnames = ["Cavallo", "Boček", "Rajilič", "Novák", "Svoboda", "Novotný ", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec", "Pospíšil", "Proche", "Pokorný", "Hájek", "Král", "Jelínek", "Růžička", "Beneš",];
    const femaleNames = ["Sabina", "Agata", "Eva", "Hana", "Anna", "Lenka", "Adéla", "Alena", "Bára", "Denisa", "Diana", "Dominika", "Dorota", "Ela", "Elen", "Laura", "Magdaléna", "Markéta", "Monika", "Vanesa", "Veronika",];
    const femaleSurnames = ["Cavallová", "Bočková", "Rajiličová", "Nováková", "Svobodová", "Novotná ", "Dvořáková", "Černá", "Procházková", "Kučerová", "Veselá", "Horáková", "Němecová", "Pospíšilová", "Kolářová", "Pokorná", "Hájeková", "Králová", "Jelíneková", "Růžičková", "Benešová",];

    const workloadOptions = [10, 20, 30, 40];
    const dtoOut = []

    const employee =
        {
            gender: "",
            birthdate: "",
            name: "",
            surname: "",
            workload: 0
        };

    let year = new Date().getFullYear();
    let minAge = year - dtoIn.age.min
    let maxAge = year - dtoIn.age.max

    for (let i = 0; i < dtoIn.count; i++) {

        if (Math.floor(Math.random() * 2) === 1) {
            employee.gender = "female"
            employee.name = femaleNames[Math.floor(Math.random() * femaleNames.length)];
            employee.surname = femaleSurnames[Math.floor(Math.random() * femaleSurnames.length)];
        } else {
            employee.gender = "male"
            employee.name = maleNames[Math.floor(Math.random() * maleNames.length)];
            employee.surname = maleSurnames[Math.floor(Math.random() * maleSurnames.length)];
        }

        employee.workload = workloadOptions[Math.floor(Math.random() * workloadOptions.length)];
        employee.birthdate = randomDate(new Date(minAge, 0, 1), new Date(maxAge, 0, 1)).toISOString();

        dtoOut.push(JSON.parse(JSON.stringify(employee)))
    }

    console.log(dtoOut)
    return dtoOut;

}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}