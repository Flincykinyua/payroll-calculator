//get form 
let myform = document.getElementById('myform')


//add event listener
myform.addEventListener('submit', function (e) {
    //prevent the page from refreshing
    e.preventDefault

    //get form data
    let Basicsalary = document.getElementById("Basicsalary").value
    let Benefits = document.getElementById("Benefits").value

    //calculate gross salary
    function calculate_gross_salary(a, b,) {
        let gross = a + b;
        return gross;
    }
    let gross_salary = calculate_gross_salary(Basicsalary, Benefits)
    document.getElementById("gross salary").innerHTML = gross_salary

    //calculate NSSF
    function calculateNSSF(a) {
        let NSSFcontribution = 0;
        if (a >= 0 && a <= 18000) {
            NSSFcontribution = a * 0.06;
        } else {
            NSSFcontribution = 0.06 * 18000;
        }
        return NSSFcontribution
    }
    let NSSF = calculateNSSF(gross_salary)
    document.getElementById('NSSF').innerHTML = NSSF

    //calculate NHIF

    function calculateNHIF(X) {
        let NHIF_contribution = 0;

        if (X > 0 && X <= 5999) {
            NHIF_contribution = 150;
        } else if (X >= 6000 && X <= 7999) {
            NHIF_contribution = 300;
        } else if (X >= 8000 && X <= 11999) {
            NHIF_contribution = 400;
        } else if (X >= 12000 && X <= 14999) {
            NHIF_contribution
        } else if (X >= 15000 && X <= 19999) {
            NHIF_contribution = 600;
        } else if (X >= 20000 && X <= 24999) {
            NHIF_contribution = 750;
        } else if (X >= 25000 && X <= 29999) {
            NHIF_contribution = 850;
        } else if (X >= 30000 && X <= 34999) {
            NHIF_contribution = 900;
        } else if (X >= 35000 && X <= 39999) {
            NHIF_contribution = 950;
        } else if (X >= 40000 && X <= 44999) {
            NHIF_contribution = 1100;
        } else if (X >= 50000 && X <= 59999) {
            NHIF_contribution = 1200;
        } else if (X >= 60000 && X <= 69999) {
            NHIF_contribution = 1300;
        } else if (X >= 70000 && X<= 79999) {
            NHIF_contribution = 1400;
        } else if (X >= 80000 && X <= 89999) {
            NHIF_contribution = 1500;
        } else if (X >= 90000 && X <= 99999) {
            NHIF_contribution = 1600;
        } else {
            NHIF_contribution = 1700;
        }
        return NHIF_contribution;
    }
    let NHIF = calculateNHIF = NHIF(gross_salary)
    document.getElementById("NHIF").innerHTML = NHIF;
})


