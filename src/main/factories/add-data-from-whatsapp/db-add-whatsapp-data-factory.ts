import { DbWhatsappData } from "../../../data/usecase/db-add-whatsapp-data";
import { AddFlightInfo } from "../../../domain/usecaces/flight-usecase";
import { FlightSequlizeAdapter } from "../../../infra/db/sequelize/flight-sequlize-adapter";
import { APISearchFlight } from "../../../infra/service-api/search-flight";

export const dBAddWhatsappData = (): AddFlightInfo => {
  const flightAdapter = new FlightSequlizeAdapter();
  const searchFlight = new APISearchFlight();

  return new DbWhatsappData(flightAdapter, searchFlight);
};
