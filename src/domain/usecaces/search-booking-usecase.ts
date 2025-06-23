export interface SearchBooking {
  seachPNR(reference: string): Promise<any>;
}
