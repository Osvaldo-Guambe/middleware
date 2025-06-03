export const createCheckoutSessionPath = {
  post: {
    tags: ["Criar Sessão de Checkout"],
    summary: "Criar sessão",
    description:
      "🔑 A API permite a criação de uma sessão de pagamento, que encapsula todas as informações necessárias para realizar uma transação online. Essa sessão pode ser utilizada para gerar um token de cartão de crédito e iniciar o fluxo de pagamento com segurança.",
    requestBody: {
      content: {
        "application/json": {
          //   schema: {
          //     // $ref: "#/components/schemas/clientSchema",
          //   },
          examples: {
            CheckoutSession: {
              value: {
                amount: "100",
                returnUrl: "http://localhost:4006/api/payment",
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "Sessão Iniciada com sucesso",
      },
      400: {
        description: "Campos vazios, falha ao iniciar a sessão",
      },
      500: {
        description: "Erro interno do servidor",
      },
    },
  },
};
