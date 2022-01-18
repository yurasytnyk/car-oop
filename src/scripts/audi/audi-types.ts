import { RADIO_STATUS } from "./audi-enums.js";

export interface IRadio {
  radio: RADIO_STATUS;
  turnRadio(): string;
}
