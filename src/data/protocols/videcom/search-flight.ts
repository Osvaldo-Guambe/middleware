export interface SearchFlightAttributes {
  date: any;
  origin: any;
  destination: any;
  passengers: any;
  currency: any;
  language: any;
  tripType: any;
}

export interface SearchFlight {
  search(data: SearchFlightAttributes): Promise<any>;
}
