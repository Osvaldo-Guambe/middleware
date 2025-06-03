import { Router } from "express";
import { expressAdapterRouter } from "../adapters/express-router-adapter";
import { makeAddWhatsappDataController } from "../factories/add-data-from-whatsapp/add-whatsapp-data-factory";

const router = Router();

router.post("/flight", expressAdapterRouter(makeAddWhatsappDataController()));

export default router;
