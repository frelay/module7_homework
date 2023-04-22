// Задание 4
// Родительский класс
function Device(name, power) {
    this.name = name,
    this.power = power;
}

Device.prototype.turnOn = function() {
    console.log(`Device ${this.name} is ON!`);
};

Device.prototype.turnOff = function() {
    console.log(`Device ${this.name} is OFF!`);
};

Device.prototype.getPower = function() {
    console.log(`${this.name}'s device power is ${this.power}kWt`);
};

// Наследники
function Compressor(name, power, speed) {
    this.name = name,
    this.power = power,
    this.speed = speed;
}

Compressor.prototype = new Device();
Compressor.prototype.startPumping = function() {
    console.log(`Compressor ${this.name} started pumping compressed air`);
};
Compressor.prototype.getSpeed = function() {
    console.log(`Compressor ${this.name} speed is ${this.speed}rpm`);
};

function Airbrush(name, power, capacityOfTank) {
    this.name = name,
    this.power = power,
    this.capacityOfTank = capacityOfTank;
};

Airbrush.prototype = new Device();
Airbrush.prototype.startPainting = function() {
    console.log(`Airbrush ${this.name} started painting`);
};

Airbrush.prototype.getCapacityOfTank = function() {
    console.log(`Airbrush ${this.name} capacity of tank is ${this.capacityOfTank}l`);
};


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