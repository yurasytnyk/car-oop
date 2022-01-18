import { CAR_BODY_TYPE, CAR_BRAND } from "../car/car-enums";
import { BMW } from "../bmw/bmw";
import { Audi } from "../audi/audi";
import { ENGINE_TYPE, IGNITION_TYPE } from "../engine/engine-types";
import { BMWFactory } from "../car-factories/bwm-factory";
import { AudiFactory } from "../car-factories/audi-factory";

const factories = {
  [CAR_BRAND.BMW]: BMWFactory,
  [CAR_BRAND.AUDI]: AudiFactory,
};

export class CarFactory {
  public static createCar(
    type: CAR_BRAND,
    bodyType: CAR_BODY_TYPE,
    doorsAmount: number,
    carWeight: number,
    speed: number,
    engineType: ENGINE_TYPE,
    ignitionType: IGNITION_TYPE,
  ): Audi | BMW {
    return new factories[type]().createCar(type, bodyType, doorsAmount, carWeight, speed, engineType, ignitionType);
  }
}