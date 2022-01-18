import { Factory } from "../../engine-factory/factory";
import { Engine } from "../../engine/engine";
import { ENGINE_TYPE, IGNITION_TYPE } from "../../engine/engine-types";

export class GasEngineFactory extends Factory {
  public createEngine(
    type: ENGINE_TYPE,
    ignitionType: IGNITION_TYPE,
  ): Engine {
    return new Engine(type, ignitionType, false);
  }
}