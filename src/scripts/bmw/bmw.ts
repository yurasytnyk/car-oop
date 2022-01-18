import { CAR_BODY_TYPE, CAR_BRAND } from "../car/car-enums";
import { Car } from "../car/car";
import { Engine } from "../engine/engine";
import { ENGINE_TYPE } from "../engine/engine-types";
import { IBMW } from "./bmw-types";

export class BMW extends Car implements IBMW {
  constructor(
    public brand: CAR_BRAND,
    public bodyType: CAR_BODY_TYPE,
    public dorsAmount: number,
    public carWeight: number,
    public speed: number,
    public ignitionKey: boolean,
    public engine: Engine,
    public isEngineWarm: boolean = false,
  ) {
    super(brand, bodyType, dorsAmount, carWeight, speed, ignitionKey, engine);
    this.engine = engine;
    this.isEngineWarm = isEngineWarm;
  }

  get carBrand(): string {
      return this.brand;
  }

  get getEngineType(): string {
    return this.engine.engineType;
  }

  engineWarmUp(): boolean {
    if (this.getEngineType === ENGINE_TYPE.DIESEL && this.ignitionKey) {
      this.isEngineWarm = true;
    }

    return this.isEngineWarm;
  }
}
