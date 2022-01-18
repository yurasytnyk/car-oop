import { 
  ENGINE_TYPE, 
  IGNITION_TYPE 
} from "./engine-types";

export class Engine {
  constructor(
    private type: ENGINE_TYPE,
    private ignitionType: IGNITION_TYPE,
    private engineWorkStatus: boolean,
  ) {
    this.type = type;
    this.ignitionType = ignitionType;
    this.engineWorkStatus = engineWorkStatus;
  }

  get engineType() {
    return this.type;
  }

  get engineIgnitionType() {
    return this.ignitionType;
  }

  get isEngineStarted() {
    return this.engineWorkStatus;
  }

  get horsePower() {
    const carWeight = 5000;
    const speedPerHour = 70;
    const quarterMileSpeed = speedPerHour / 234;
    return Math.floor(carWeight * Math.pow(quarterMileSpeed, 3));
  }

  set ignitSystem(value: IGNITION_TYPE) {
    if (this.engineType === ENGINE_TYPE.DIESEL && value ===  IGNITION_TYPE.SPARK) {
      return;
    } else {
      this.ignitionType = value;
    }
  }

  public startEngine(speed: number, key: boolean) {
    if (key && speed === 0) {
      this.engineWorkStatus = true;
    }
  }
}
