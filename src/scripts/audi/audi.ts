import { CAR_BODY_TYPE, CAR_BRAND } from "../car/car-enums";
import { Car } from "../car/car";
import { Engine } from "../engine/engine";
import { RADIO_STATUS } from "./audi-enums";
import { IRadio } from "./audi-types";

export class Audi extends Car implements IRadio {
  constructor(
    public brand: CAR_BRAND,
    public bodyType: CAR_BODY_TYPE,
    public dorsAmount: number,
    public carWeight: number,
    public speed: number,
    public ignitionKey: boolean,
    public engine: Engine,
    public radio: RADIO_STATUS = RADIO_STATUS.OFF,
  ) {
    super(brand, bodyType, dorsAmount, carWeight, speed, ignitionKey, engine);
    
    this.engine = engine;
    this.radio = radio;
  }

  get carBrand(): string {
    return this.brand;    
  }

  get getEngineType(): string {
    return this.engine.engineType;
  }

  turnRadio(): string {
    if (this.radio === RADIO_STATUS.OFF) {
      this.radio = RADIO_STATUS.ON;
    } else {
      this.radio = RADIO_STATUS.OFF;
    }
    
    return this.radio;
  }
}
