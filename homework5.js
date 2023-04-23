// Задание 5
// Родительский класс
class Device {
	constructor(name, power) {
		this.name = name,
    	this.power = power;
	}

	turnOn() {
	    console.log(`Device ${this.name} is ON!`);
	};

	turnOff() {
	    console.log(`Device ${this.name} is OFF!`);
	};

	getPower() {
	    console.log(`${this.name}'s device power is ${this.power}kWt`);
	};
}

// Наследники
class Compressor extends Device {
	constructor(name, power, speed) {
		super(name, power);
		this.speed = speed;
	}

	startPumping() {
	    console.log(`Compressor ${this.name} started pumping compressed air`);
	};

	getSpeed() {
	    console.log(`Compressor ${this.name} speed is ${this.speed}rpm`);
	};
}

class Airbrush extends Device {
	constructor(name, power, capacityOfTank) {
		super(name, power);
		this.capacityOfTank = capacityOfTank;
	}

	startPainting() {
	    console.log(`Airbrush ${this.name} started painting`);
	};

	getCapacityOfTank() {
	    console.log(`Airbrush ${this.name} capacity of tank is ${this.capacityOfTank}l`);
	};
}

// Создание экземпляров класса и вызов методов
const compressor = new Compressor("Patriot", 1.8, 2850);
compressor.turnOn();
compressor.getPower();
compressor.startPumping();
compressor.getSpeed();
compressor.turnOff();

const airbrush = new Airbrush("FUBAG", 2.5, 0.5);
airbrush.turnOn();
airbrush.getPower();
airbrush.startPainting();
airbrush.getCapacityOfTank();
airbrush.turnOff();