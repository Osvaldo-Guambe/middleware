import { WhatsappDataController } from "../../../apresentation/controller/add-whatsapp-data-controller";
import { Controller } from "../../../apresentation/protocols";
import { dBAddWhatsappData } from "./db-add-whatsapp-data-factory";
import { makeValidationAddWhatsappData } from "./validation-add-whatsapp-data-factory";

export const makeAddWhatsappDataController = (): Controller => {
  return new WhatsappDataController(
    makeValidationAddWhatsappData(),
    dBAddWhatsappData()
  );
};
