import { Router } from "express";
const router = Router();

import * as customerCtrl from "../controllers/customers.controller";
import { authJwt } from "../middlewares";

router.get("/", customerCtrl.getCustomers);

router.get("/:customerId", customerCtrl.getCustomerById);

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isUser, authJwt.isAdmin],
  customerCtrl.createCustomer
);

router.put(
  "/:customerId",
  [authJwt.verifyToken, authJwt.isUser, authJwt.isAdmin],
  customerCtrl.updateCustomerById
);

router.delete(
  "/:customerId",
  [authJwt.verifyToken, authJwt.isAdmin],
  customerCtrl.deleteCustomerById
);

export default router;