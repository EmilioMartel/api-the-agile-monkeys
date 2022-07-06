import { Router } from "express";
const router = Router();

import * as customerCtrl from "../controllers/customers.controller";
import { authJwt } from "../middlewares";

router.get("/",
  [authJwt.verifyToken, authJwt.isUser], 
  customerCtrl.getCustomers);

router.get("/:customerId",
  [authJwt.verifyToken, authJwt.isUser],
  customerCtrl.getCustomerById);

router.post(
  "/create",
  [authJwt.verifyToken, authJwt.isUser],
  customerCtrl.createCustomer
);

router.put(
  "/update/:customerId",
  [authJwt.verifyToken, authJwt.isUser],
  customerCtrl.updateCustomerById
);

router.delete(
  "/:customerId",
  [authJwt.verifyToken, authJwt.isUser],
  customerCtrl.deleteCustomerById
);

export default router;