import { Audi } from "../audi/audi";
import { BMW } from "../bmw/bmw";
import { CAR_BODY_TYPE, CAR_BRAND } from "../car/car-enums";
import { ENGINE_TYPE, IGNITION_TYPE } from "../engine/engine-types";

export abstract class CarFactoryAbstract {
  public abstract createCar(
    type: CAR_BRAND,
    bodyType: CAR_BODY_TYPE,
    doorsAmount: number,
    carWeight: number,
    speed: number,
    engineType: ENGINE_TYPE,
    ignitionType: IGNITION_TYPE,
  ): BMW | Audi;
}