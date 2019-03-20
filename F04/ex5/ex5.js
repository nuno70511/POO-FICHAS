const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function calcTotalSalaries() {
    let sum = 0;
    for (const prop in salaries){
        sum += salaries[prop];
    }
    console.log(sum);
}
calcTotalSalaries();