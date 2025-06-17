export type FlightAttribute = {
  id: string;
  incio: string;
  destino: string;
  partida: Date;
  returno: Date;
  tipoViagem: string;
  numerDePassageiro: number;
  valor: string;
};

export type FlightWithoutId = Omit<FlightAttribute, "id">;

export interface AddFlightInfo {
  add(data: FlightWithoutId): Promise<FlightAttribute | any>;
}
