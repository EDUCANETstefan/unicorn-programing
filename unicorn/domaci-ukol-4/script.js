function inputData() {
    return {
        count: document.getElementById("numberOfEmp").value,
        age: {
            min: document.getElementById("minAge").value,
            max: document.getElementById("maxAge").value
        }
    };
}

let averageWomanWorkLoadArray = []

function Main(dtoIn) {
    const maleNames = ["Ondra", "Petr", "David", "Marek", "Stefan", "Štěpán", "Oliver", "Nazar", "Boris", "Filip", "Jakub", "Kuba", "Čestmír", "Vladan", "Břetislav", "Pravoslav", "Zdenek", "Miloš", "Hynek", "Mojmír", "Valentin",];
    const maleSurnames = ["Cavallo", "Boček", "Rajilič", "Novák", "Svoboda", "Novotný ", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec", "Pospíšil", "Proche", "Pokorný", "Hájek", "Král", "Jelínek", "Růžička", "Beneš",];
    const femaleNames = ["Sabina", "Agata", "Eva", "Hana", "Anna", "Lenka", "Adéla", "Alena", "Bára", "Denisa", "Diana", "Dominika", "Dorota", "Ela", "Elen", "Laura", "Magdaléna", "Markéta", "Monika", "Vanesa", "Veronika",];
    const femaleSurnames = ["Cavallová", "Bočková", "Rajiličová", "Nováková", "Svobodová", "Novotná ", "Dvořáková", "Černá", "Procházková", "Kučerová", "Veselá", "Horáková", "Němecová", "Pospíšilová", "Kolářová", "Pokorná", "Hájeková", "Králová", "Jelíneková", "Růžičková", "Benešová",];

    const dtoOut = {
        total: 0,
        workload10: 0,
        workload20: 0,
        workload30: 0,
        workload40: 0,
        averageAge: 0,
        minAge: 0,
        maxAge: 0,
        medianAge: 0,
        medianWorkload: 0,
        averageWomenWorkload: 0,
        sortedByWorkload: [],
    };

    const employee = {
        gender: "",
        birthdate: "",
        name: "",
        surname: "",
        workload: 0
    };

    const workloadOptions = [10, 20, 30, 40];

    let year = new Date().getFullYear();
    let minAge = year - dtoIn.age.min
    let maxAge = year - dtoIn.age.max
    let ageArr = []

    dtoOut.total = dtoIn.count

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

        employee.birthdate = randomDate(new Date(minAge, 0, 1), new Date(maxAge, 0, 1)).toISOString()

        const dateBirt = new Date(employee.birthdate)
        const age = year - dateBirt.getFullYear()
        ageArr.push(age)
        dtoOut.averageAge = ageArr.reduce((a, b) => a + b, 0) / ageArr.length;
        dtoOut.minAge = ageArr.reduce((a, b) => a + b, 0) / ageArr.length;
        dtoOut.maxAge = ageArr.reduce((a, b) => a + b, 0) / ageArr.length;
        dtoOut.medianAge = ageArr.reduce((a, b) => a + b, 0) / ageArr.length;

        getWorkload(employee, dtoOut)
        getAverageWomenWorkload(dtoOut)

        dtoOut.sortedByWorkload.push(JSON.parse(JSON.stringify(employee)))
    }

    sort(dtoOut)

    console.log(dtoOut)
    return dtoOut;
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function sort(dtoOut) {
    dtoOut.sortedByWorkload.sort(function (a, b) {  return a.workload - b.workload;});
}

function getWorkload(employee, dtoOut) {

        if (employee.workload === 10) {
            dtoOut.workload10++;
            if (employee.gender === "female") {
                averageWomanWorkLoadArray.push(10)
            }
        } else if (employee.workload === 20) {
            dtoOut.workload20++;
            if (employee.gender === "female") {
                averageWomanWorkLoadArray.push(20)
            }
        } else if (employee.workload === 30) {
            dtoOut.workload30++;
            if (employee.gender === "female") {
                averageWomanWorkLoadArray.push(30)
            }
        } else if (employee.workload === 40) {
            dtoOut.workload40++;
            if (employee.gender === "female") {
                averageWomanWorkLoadArray.push(40)
            }
        }
}

function getAverageWomenWorkload(dtoOut) {
    let sum = 0

    for (let i = 0; i < averageWomanWorkLoadArray.length; i++) {
        sum = sum + averageWomanWorkLoadArray[i];
    }
    dtoOut.averageWomenWorkload = sum / averageWomanWorkLoadArray.length
}

//function age(dtoOut, employee) {}
