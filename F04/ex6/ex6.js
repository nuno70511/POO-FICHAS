let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
console.table(menu);

multiplyNumeric(menu);

console.table(menu);

function multiplyNumeric(menu){
    for (const prop in menu){
        if (typeof menu[prop] === "number"){
            menu[prop] *= 2;
        }
    }
}