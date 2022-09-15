// interfaces
// creates a new type, describing the property names and values types of an object
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};
interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}
const printSummary = (vehicle: Reportable): void => {
  // console.log(`name: ${vehicle.name}`);
  // console.log(`year: ${vehicle.year}`);
  // console.log(`broken: ${vehicle.broken}`);
  console.log(vehicle.summary());
};
printSummary(oldCivic);
const drink1 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};
printSummary(drink1);
// reusable interfaces
