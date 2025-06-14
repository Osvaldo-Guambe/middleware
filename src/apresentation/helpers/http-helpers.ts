import { HttpResponse } from "../../apresentation/protocols";

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data,
});

export const noContent = (data?: any): HttpResponse => ({
  statusCode: 204,
  body: data,
});

export const send = (data: any): HttpResponse => ({
  statusCode: 250,
  body: data,
});

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});
// export const unAuthorizedError = (data: string): HttpResponse => ({
//   statusCode: 401,
//   body: new UnauthorizedError(data),
// });

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error,
});

export const serverError = (error: any): HttpResponse => ({
  statusCode: 500,
  body: error,
});

export const notFound = (error: Error): HttpResponse => ({
  statusCode: 404,
  body: error,
});
