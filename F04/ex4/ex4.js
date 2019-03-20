const schedule = {};

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

function isEmpty(obj) {
    for (const prop in obj){
        if (prop){
            return false;
        }
    }
    return true;
};
console.log(isEmpty(schedule));