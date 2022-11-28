function Conversion() {


    let numberDec = (document.getElementById('numberDec').value);
    let numberBin = "";

    while (numberDec !== 0) {

        if (numberDec % 2 === 1) {
            numberBin = "1" + numberBin;
        } else {
            numberBin = "0" + numberBin;
        }

        numberDec = Math.floor(numberDec/2);
    }

    document.getElementById('numberBin').value = numberBin;
}