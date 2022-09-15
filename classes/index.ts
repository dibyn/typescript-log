// classes
// - blue print to create an object with some fields (values) and methods (functions) to represent a thing
// #  --- modifiers --- #
// public - this method can be called any where any time
// private - this method can only be called by other methods in this class
// protected - this method can be called by other methods in this class, or by other methods in child classes

class Vehicle {
  // color: string = 'red';
  constructor(public color: string) {} // instantly executed
  protected stop(): void {
    console.log('stop me');
  }
  public honk(): void {
    console.log('beep');
  }
}
const vehicle = new Vehicle('orange');
vehicle.honk();
console.log(vehicle.color);
// vehicle.stop() // won't work since it is a modifier protected

class Car1 extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
  }
  stopDriving(): void {
    this.stop(); // only accessible in a inherited child
  }
}
const car2 = new Car1(4, 'red');
car2.startDrivingProcess();
car2.honk();
car2.stopDriving();
