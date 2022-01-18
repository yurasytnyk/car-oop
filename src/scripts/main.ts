import { CarFactory } from "./car-factory/car-factory";
import { CAR_BODY_TYPE, CAR_BRAND } from "./car/car-enums";
import { ENGINE_TYPE, IGNITION_TYPE } from "./engine/engine-types";

const bmw = CarFactory.createCar(
  CAR_BRAND.BMW,
  CAR_BODY_TYPE.COUPE,
  4,
  2000,
  200,
  ENGINE_TYPE.DIESEL,
  IGNITION_TYPE.COMPRESSION
);
const audi = CarFactory.createCar(
  CAR_BRAND.AUDI,
  CAR_BODY_TYPE.SEDAN,
  2,
  2000,
  180,
  ENGINE_TYPE.GAZ,
  IGNITION_TYPE.SPARK
);

console.group(`${bmw.carBrand}`);
console.log(bmw);
console.log("Car body type:", bmw.carBodyType);
console.log("Turn key: ", bmw.turnKey());

if ("engineWarmUp" in bmw && "isEngineWarm" in bmw) {
  console.log("Engine warm up:", bmw.engineWarmUp());
  console.log("Is engine warm up:", bmw.isEngineWarm);
}

console.log("Engine type:", bmw.getEngineType);
console.log(`Drive ${bmw.carBrand}:`, bmw.drive());
console.groupEnd();

console.group(`${audi.carBrand}`);
console.log(audi);
console.log("Car body type:", audi.carBodyType);
console.log("Turn key: ", audi.turnKey());
console.log("Engine type:", audi.getEngineType);

if ("turnRadio" in audi) {
  console.log("Turn on radio:", audi.turnRadio());
}

console.log(`Drive ${audi.carBrand}:`, audi.drive());
console.groupEnd();
