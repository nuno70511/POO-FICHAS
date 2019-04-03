// a.
// i.
class Dice {
    constructor() {
        this.faceValue;
    }

    // ii.
    get faceValue() {
        return this._faceValue;
    }

    set faceValue(value) {
        this._faceValue = value;
    }

    // iii.
    // 1.
    getQuantityFaces(faces = 6) {
        return faces;
    }

    //2.
    roll() {
        this.faceValue = Math.floor(Math.random() * this.getQuantityFaces()) + 1;
    }
}

// iv.
function showTable(){

    const dice = new Dice();

    const rolls = [ 0, 0, 0, 0, 0, 0 ];

    for (let i = 0; i < 100;  i++){
        dice.roll();
        const face = dice.faceValue;
        rolls[face - 1]++;
    }
    
    console.table(rolls);
}

showTable();