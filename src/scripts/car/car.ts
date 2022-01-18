import { ICar } from "./car-types";
import {
  CAR_BODY_TYPE,
  CAR_BRAND,
} from "./car-enums.js";
import { Engine } from "../engine/engine";

export abstract class Car implements ICar {
  constructor(
    protected brand: CAR_BRAND,
    protected bodyType: CAR_BODY_TYPE,
    protected dorsAmount: number,
    protected carWeight: number,
    protected speed: number,
    protected ignitionKey: boolean,
    protected engine: Engine,
  ) {
    this.brand = brand;
    this.bodyType = bodyType;
    this.dorsAmount = dorsAmount;
    this.carWeight = carWeight;
    this.speed;
    this.ignitionKey;
  }

  get carBrand(): string {
    return this.brand;
  }

  get carBodyType(): string {
    return this.bodyType;
  }

  get getEngineType(): string {
    return this.engine.engineType;
  }

  set setIgnitionKeyStatus(value: boolean) {
    this.ignitionKey = value;
  }

  turnKey(): string {
    this.setIgnitionKeyStatus = !this.ignitionKey;
    this.engine.startEngine(this.speed, this.ignitionKey);

    if (this.ignitionKey) {
      return "Key is turned on";
    }

    return "Key is turned off";
  }

  drive(): string {
    if (this.ignitionKey) {
      return "Let's role!";
    }

    return "Please start engine first";
  }
}
