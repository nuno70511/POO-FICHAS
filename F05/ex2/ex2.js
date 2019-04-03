// a.
class Car {
    //b.
    constructor(brand, plate, color, deposit, fuelType){
        this.brand = brand;
        this.plate = plate;
        this.color = color;
        this.deposit = deposit;
        this.fuelType = fuelType;
    }

    // d.
    // i.
    set color(value){
        this._color = value;
    }

    //iii.
    set deposit(value){
        this._deposit = value;
    }
    
    refuel(litres){
        this._deposit += litres;
    }

    ///iv.
    consume(km){
        this._deposit -= (5 * km) / 100;
    }

    // f.
    // i.
    static brandCount(brandName){
        let counter = 0;
        for (const element of cars){
            if (element.brand === brandName){
                counter++;
            }
        }
        return counter;
    }

    // ii.
    static sumDepositOfFuelType(fuelType){
        let sum = 0;
        for (const element of cars){
            if (element.fuelType === fuelType){
                sum += element._deposit;
            }
        }
        return sum;
    }
}

// Criar 3 objectos
const car1 = new Car("Ford", "91-GH-15", "verde", 40, "Gasóleo");
const car2 = new Car("Opel", "23-AB-23", "branco", 50, "Gasolina");
const car3 = new Car("Nissan", "12-CX-45", "preto", 22, "Gasóleo");

console.log(car1._deposit);
car1.refuel(20);
console.log(car1._deposit);
car1.consume(10);
console.log(car1._deposit);

// e.
const cars = [];
cars.push(car1, car2, car3);
console.table(cars);


console.log(Car.brandCount("Nissan"));
console.log(Car.sumDepositOfFuelType("Gasóleo"));