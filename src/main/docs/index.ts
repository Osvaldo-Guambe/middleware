import { createCheckoutSessionPath } from "./paths/checkout-session/ckeckout-session";
import { checkSessionSchema } from "./schemas/checkout-sessions-schemas";

export default {
  openapi: "3.0.0",
  info: {
    title: "💰 API de Netshop - AlfaPay",
    version: "1.5.0",
    description:
      "🧾 A API do Netshop do BIM é uma interface RESTful que permite a integração de soluções de pagamento online diretamente com a plataforma do Banco Internacional de Moçambique (BIM). Esta API é voltada para comerciantes e desenvolvedores, possibilitando a aceitação de pagamentos eletrônicos com cartões Visa e Mastercard, de forma segura e escalável.",
    contact: {
      email: "osvaldofilipeguambe@gmail.com",
      phone: "+258 87 152 9915",
    },
  },
  servers: [
    {
      url: "http://localhost:4006/api",
      description: "Api de Desenvolvimento",
    },
    {
      url: "https://backend-client.alfapay.com/api",
      description: "Api de Produção",
    },
  ],
  paths: {
    "/": createCheckoutSessionPath,

    components: {
      schemas: {
        checkSessionSchema,
      },
    },
  },
};
