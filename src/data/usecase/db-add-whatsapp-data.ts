import {
  AddFlightInfo,
  FlightAttribute,
  FlightWithoutId,
} from "../../domain/usecaces/flight-usecase";
import { AddFlightDataRespository } from "../protocols/db/respository/flight/add-flight-data-repository";
import { SearchFlight } from "../protocols/videcom/search-flight";

export class DbWhatsappData implements AddFlightInfo {
  constructor(
    private readonly addFlightDataRepository: AddFlightDataRespository,
    private readonly searchFlight: SearchFlight
  ) {}

  async add(data: FlightWithoutId): Promise<FlightAttribute | any> {
    const addFlight = await this.addFlightDataRepository.addData(data);

    const search = await this.searchFlight.search({
      date: data.returno,
      origin: data.incio,
      destination: data.destino,
      passengers: data.numerDePassageiro,
      currency: "USD",
      language: "en",
      tripType: data.tipoViagem,
    });

    return search;
  }
}
