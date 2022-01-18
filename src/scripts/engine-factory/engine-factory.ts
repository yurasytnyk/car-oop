import { Engine } from "../engine/engine";
import { ENGINE_TYPE, IGNITION_TYPE } from "../engine/engine-types";
import { GasEngineFactory } from "../engine-factories/gas/gas-engine-factory";
import { DieselEngineFactory } from "../engine-factories/diesel/diesel-engine-factory";

const engineFactories = {
  [ENGINE_TYPE.DIESEL]: DieselEngineFactory,
  [ENGINE_TYPE.GAZ]: GasEngineFactory,
};

export class EngineFactory {
  public static createEngine(
    type: ENGINE_TYPE,
    ignitionType: IGNITION_TYPE
  ): Engine {
    return new engineFactories[type]().createEngine(type, ignitionType);
  }
}