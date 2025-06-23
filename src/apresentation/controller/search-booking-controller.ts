import { SearchBooking } from "../../domain/usecaces/search-booking-usecase";
import { badRequest, ok, serverError } from "../helpers/http-helpers";
import { Controller, HttpRequest, HttpResponse } from "../protocols";
import { Validation } from "../protocols/validation";

export class SearchBookingControlller implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly searchBooking: SearchBooking
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body);

      if (error) {
        return badRequest(error);
      }

      const searchPNR = await this.searchBooking.seachPNR(
        httpRequest.body.bookingReference
      );

      return ok(searchPNR);
    } catch (error) {
      console.log(error);
      if (error.errors) {
        return serverError({
          erro: error?.errors?.map((err: any) => err?.message),
        });
      } else {
        return serverError({ error });
      }
    }
  }
}
