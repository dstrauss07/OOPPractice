var Auto = function Auto(year,make,model,vin) {
    this.autoYear= year;
    this.autoMake = make;
    this.autoModel = model;

    this.PrintName = function PrintName(){
        return year + " " + make + " " + model;
    }
};

var Car = function Car(year,make,model,vin,doors,cylinders){
    Auto.call(this,year,make,model,vin);
    this.doorsNumber = doors;
    this.engineCylinder = cylinders;
};



var displayAuto = function(auto) {
    console.log(auto.PrintName());
};



var myAuto = new Auto(2012,"Toyota","Prius","x187");

var myCar = new Car(2010,"Honda","Civic","x777",2,4);

displayAuto(myCar);

console.log(myAuto.autoYear);

console.log(myCar.doorsNumber);