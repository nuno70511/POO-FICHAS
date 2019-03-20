//a.
const grades = [
    {
        name: 'Rui',
        grade: 8
    },
    {
        name: 'Ana',
        grade: 12
    },
    {
        name: 'Carla',
        grade: 14
    }
];

//b.
function promptForObj() {
    const name = prompt("Nome:");
    const grade = +prompt("Nota:");
    const temp = {name, grade};
    grades[grades.length] = temp;
    console.table(grades);
}
promptForObj();

//c.
function calcAvgGrade() {
    let ttlGrades = 0;
    for (const prop of grades){
        ttlGrades += prop.grade;
    }
    console.log(ttlGrades / grades.length);
}
calcAvgGrade();

//d.
function getApprovedStudents(){
    for (const prop of grades){
        if (prop.grade >= 9.5){
            console.log(prop.name);
        }
    }
}
getApprovedStudents();