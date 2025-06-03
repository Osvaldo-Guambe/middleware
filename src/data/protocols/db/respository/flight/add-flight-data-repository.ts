import {
  FlightAttribute,
  FlightWithoutId,
} from "../../../../../domain/usecaces/flight-usecase";

export interface AddFlightDataRespository {
  addData(data: FlightWithoutId): Promise<FlightAttribute>;
}
