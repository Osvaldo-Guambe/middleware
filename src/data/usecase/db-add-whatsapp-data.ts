import {
  AddFlightInfo,
  FlightAttribute,
  FlightWithoutId,
} from "../../domain/usecaces/flight-usecase";
import { AddFlightDataRespository } from "../protocols/db/respository/flight/add-flight-data-repository";

export class DbWhatsappData implements AddFlightInfo {
  constructor(
    private readonly addFlightDataRepository: AddFlightDataRespository
  ) {}

  async add(data: FlightWithoutId): Promise<FlightAttribute> {
    const addFlight = await this.addFlightDataRepository.addData(data);
    return addFlight;
  }
}
