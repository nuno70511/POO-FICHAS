//a.
const student = {
    name: "David Silva",
    course: "POO",
    grade: 12
};

//b.
function getObjKeys() {
    for (const key in student){
        console.log(key);
    }
}
getObjKeys();

//c.
function removePropGrade() {
    delete student.course;
}
removePropGrade();
getObjKeys();

//d.
function calcObjSize() {
    let count = 0;
    for (const key in student){
        count++;
    }
    console.log(count);
}
calcObjSize();