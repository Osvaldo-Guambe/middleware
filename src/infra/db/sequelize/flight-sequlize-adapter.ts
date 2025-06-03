import { AddFlightDataRespository } from "../../../data/protocols/db/respository/flight/add-flight-data-repository";
import { Flight } from "../../../domain/models/flight";
import {
  FlightWithoutId,
  FlightAttribute,
} from "../../../domain/usecaces/flight-usecase";

export class FlightSequlizeAdapter implements AddFlightDataRespository {
  async addData(data: FlightWithoutId): Promise<FlightAttribute> {
    return await Flight.create({
      incio: data.incio,
      destino: data.destino,
      partida: data.partida,
      returno: data.returno,
      tipoViagem: data.tipoViagem,
      numerDePassageiro: data.numerDePassageiro,
      valor: data.valor,
    });
  }
}
