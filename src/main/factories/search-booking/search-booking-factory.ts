import { SearchBookingControlller } from "../../../apresentation/controller/search-booking-controller";
import { Controller } from "../../../apresentation/protocols";
import { makeDbSearchgBooking } from "./db-search-booking-factory";
import { makeValidationSearchBooking } from "./validation-search-booking-factory";

export const makeSearchBookingController = (): Controller => {
  return new SearchBookingControlller(
    makeValidationSearchBooking(),
    makeDbSearchgBooking()
  );
};
