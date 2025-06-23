import { SearchBooking } from "../../domain/usecaces/search-booking-usecase";
import { SearchBookingAdapter } from "../../infra/service-api/search-booking-adapter";

export class DbSearchBookingData implements SearchBooking {
  constructor(private readonly searchBookingAdapter: SearchBookingAdapter) {}
  async seachPNR(reference: string): Promise<any> {
    return await this.searchBookingAdapter.seachPNR(reference);
  }
}
