export const checkSessionSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    successIndicator: {
      type: "string",
    },
    sessionId: {
      type: "string",
    },
    orderId: {
      type: "string",
    },
    fullResponse: {
      type: "string",
    },
    url: {
      type: "string",
    },
    statusCode: {
      type: "number",
    },
  },
};
