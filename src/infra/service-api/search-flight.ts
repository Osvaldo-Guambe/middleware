import { XMLParser } from "fast-xml-parser";
import {
  SearchFlight,
  SearchFlightAttributes,
} from "../../data/protocols/videcom/search-flight";
import QueryString from "qs";
import axios from "axios";

export class APISearchFlight implements SearchFlight {
  async search(data: SearchFlightAttributes): Promise<any> {
    function formatShallowLinkDate(dateString) {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const date = new Date(dateString);
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      return `${day}${month}${year}`;
    }
    function formatCommandDate(dateString) {
      const months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ];
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, "0");
      const month = months[date.getMonth()];
      return `${day}${month}`;
    }

    function buildVRSCommand({
      date,
      salesCity,
      startCity,
      journey,
      qtyseats,
    }) {
      return `A${date}${salesCity}${startCity}[SalesCity=${salesCity},VARS=True,ClassBands=True,StartCity=${startCity},SingleSeg=s,FGNoAv=True,qtyseats=${qtyseats},journey=${journey}]`;
    }

    const formatteDate = formatCommandDate(data.date);
    const command = buildVRSCommand({
      date: formatteDate,
      salesCity: data.origin,
      startCity: data.origin,
      journey: `${data.origin}-${data.destination}`,
      qtyseats: data.passengers,
    });

    const vrsResponse = await sendVRSRequest(command);
    const parser = new XMLParser();
    const jsonResponse = parser.parse(vrsResponse.data);

    async function sendVRSRequest(command) {
      const data = QueryString.stringify({
        Token:
          process.env.VRS_TOKEN ||
          "E7ATVw5LGLMCx96JJ9RDM30KwC3xc746/XtetqSBOwI=",
        Command: command,
      });

      return await axios.post(
        process.env.VRS_URL ||
          "https://customertest.videcom.com/fastjet/vrsxmlservice/vrsxmlwebservice3.asmx/PostVRSCommand",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/xml",
          },
          timeout: 10000,
        }
      );
    }

    const responseData = await formatFlightResponse({
      vrsData: jsonResponse,
      searchParams: {
        date: data.date,
        origin: data.origin,
        destination: data.destination,
        passengers: data.passengers,
        currency: data.currency,
        language: data.language,
        tripType: data.tripType,
      },
    });

    function generateDeepLink({
      date,
      origin,
      destination,
      passengers,
      currency,
      language,
      tripType,
    }) {
      const params = new URLSearchParams({
        Adult: passengers,
        Child: "0",
        Infant: "0",
        UserLanguage: language,
        UserCurrency: currency,
        DisplayedPriceCurrency: currency,
        TripType: tripType,
        Cabin1: "Economy",
        DepartureDate1: date,
        Origin1: origin,
        Destination1: destination,
      });

      return `${
        process.env.IBE_BASE_URL ||
        "https://customertest.videcom.com/fastjet/VARS/Public"
      }/deeplink.aspx?${params.toString()}`;
    }

    function generateShallowLink({
      date,
      origin,
      destination,
      passengers,
      currency,
      language,
      tripType,
    }) {
      const formattedDate = formatShallowLinkDate(date);
      const tripTypeParam =
        tripType === "RoundTrip"
          ? "chkJourneyTypeReturn"
          : "chkJourneyTypeOneWay";

      const params = new URLSearchParams({
        ReturnTrip: tripTypeParam,
        orig: origin,
        dest: destination,
        departs: formattedDate,
        ad: passengers,
        ch: "0",
        in: "0",
        currency: currency,
        lang: language,
      });

      return `${
        process.env.IBE_BASE_URL ||
        "https://customertest.videcom.com/fastjet/VARS/Public"
      }/shallowlink.aspx?${params.toString()}`;
    }

    async function formatFlightResponse({ vrsData, searchParams }) {
      // Parse dos dados dos voos
      const flights = JSON.parse(vrsData.string);

      // Geração dos links
      const deepLink = generateDeepLink(searchParams);
      const shallowLink = generateShallowLink(searchParams);

      return {
        status: "success",
        data: {
          flights,
          booking_links: {
            deep_link: deepLink,
            shallow_link: shallowLink,
            mobile_friendly: shallowLink, // Recomendamos usar shallow para mobile
          },
          search_parameters: searchParams,
          timestamp: new Date().toISOString(),
        },
      };
    }

    return responseData;
  }
}
