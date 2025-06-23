import { DbSearchBookingData } from "../../../data/usecase/db-search-booking-data";
import { SearchBooking } from "../../../domain/usecaces/search-booking-usecase";
import { SearchBookingAdapter } from "../../../infra/service-api/search-booking-adapter";

export const makeDbSearchgBooking = (): SearchBooking => {
  const searchBookingAdapter = new SearchBookingAdapter();

  return new DbSearchBookingData(searchBookingAdapter);
};
