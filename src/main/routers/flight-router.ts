import { Router } from "express";
import { expressAdapterRouter } from "../adapters/express-router-adapter";
import { makeAddWhatsappDataController } from "../factories/add-data-from-whatsapp/add-whatsapp-data-factory";
import { makeSearchBookingController } from "../factories/search-booking/search-booking-factory";

const router = Router();

router.post("/flight", expressAdapterRouter(makeAddWhatsappDataController()));
router.post("/search-pnr", expressAdapterRouter(makeSearchBookingController()));

export default router;
