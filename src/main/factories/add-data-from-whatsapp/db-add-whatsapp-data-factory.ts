import { DbWhatsappData } from "../../../data/usecase/db-add-whatsapp-data";
import { AddFlightInfo } from "../../../domain/usecaces/flight-usecase";
import { FlightSequlizeAdapter } from "../../../infra/db/sequelize/flight-sequlize-adapter";

export const dBAddWhatsappData = (): AddFlightInfo => {
  const flightAdapter = new FlightSequlizeAdapter();
  return new DbWhatsappData(flightAdapter);
};
