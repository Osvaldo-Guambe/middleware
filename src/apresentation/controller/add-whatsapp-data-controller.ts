import { AddFlightInfo } from "../../domain/usecaces/flight-usecase";
import {
  badRequest,
  noContent,
  ok,
  serverError,
} from "../helpers/http-helpers";
import { Controller, HttpRequest, HttpResponse } from "../protocols";
import { Validation } from "../protocols/validation";

export class WhatsappDataController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly addVooInfo: AddFlightInfo
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {
        vooInicial,
        vooDestino,
        datadePartida,
        datadeRetorno,
        tipoViagem,
        numerodePassageiro,
        valoraPagar,
      } = httpRequest.body;

      const error = this.validation.validate(httpRequest.body);
      if (error) {
        return badRequest(error);
      }

      const add = await this.addVooInfo.add({
        incio: vooInicial,
        destino: vooDestino,
        partida: datadePartida,
        returno: datadeRetorno,
        tipoViagem: tipoViagem,
        numerDePassageiro: numerodePassageiro,
        valor: valoraPagar,
      });

      if (!add) {
        return badRequest(new Error("Falha ao salvar os dados"));
      }

      return ok(add);
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
