import axios from "axios";
import { SearchBooking } from "../../domain/usecaces/search-booking-usecase";

export class SearchBookingAdapter implements SearchBooking {
  async seachPNR(reference: string): Promise<any> {
    const response = await axios.post(
      "https://customertest.videcom.com/fastjet/vrsxmlservice/vrsxmlwebservice3.asmx/PostVRSCommand",
      `Token=E7ATVw5LGLMCx96JJ9RDM30KwC3xc746/XtetqSBOwI=&Command=*${reference}~x`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    // Extrai o conteúdo XML e processa a string JSON interna
    const xmlContent = response.data;
    const jsonString = xmlContent.match(/<string[^>]*>([\s\S]*?)<\/string>/)[1];
    const pnrData = JSON.parse(jsonString);

    // Retorna o JSON organizado
    return {
      success: true,
      data: pnrData.PNR, // Acessa diretamente o objeto PNR
      metadata: {
        timestamp: new Date().toISOString(),
        source: "VRS XML Service",
      },
    };
  }
}
