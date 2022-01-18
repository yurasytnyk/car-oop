import { Audi } from "../audi/audi";
import { CAR_BODY_TYPE, CAR_BRAND } from "../car/car-enums";
import { EngineFactory } from "../engine-factory/engine-factory";
import { ENGINE_TYPE, IGNITION_TYPE } from "../engine/engine-types";
import { CarFactoryAbstract } from "./factory";

export class AudiFactory extends CarFactoryAbstract {
  public createCar(
    type: CAR_BRAND,
    bodyType: CAR_BODY_TYPE,
    doorsAmount: number,
    carWeight: number,
    speed: number,
    engineType: ENGINE_TYPE,
    ignitionType: IGNITION_TYPE,
  ): Audi {
    const engine = EngineFactory.createEngine(engineType, ignitionType);
    
    return new Audi(type, bodyType, doorsAmount, carWeight, speed, false, engine);
  }
}