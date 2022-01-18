import { Engine } from "../engine/engine";
import { ENGINE_TYPE, IGNITION_TYPE } from "../engine/engine-types";

export abstract class Factory {
  public abstract createEngine(
    type: ENGINE_TYPE,
    ignitionType: IGNITION_TYPE
  ): Engine;
}