import { Router } from "express";
const router = Router();

import * as customerCtrl from "../controllers/customers.controller";
import { authJwt } from "../middlewares";

router.get("/",
  [authJwt.verifyToken, authJwt.isUser, authJwt.isAdmin], 
  customerCtrl.getCustomers);

router.get("/:customerId",
  [authJwt.verifyToken, authJwt.isUser, authJwt.isAdmin],
  customerCtrl.getCustomerById);

router.post(
  "/create",
  [authJwt.verifyToken, authJwt.isUser, authJwt.isAdmin],
  customerCtrl.createCustomer
);

router.put(
  "/update/:customerId",
  [authJwt.verifyToken, authJwt.isUser, authJwt.isAdmin],
  customerCtrl.updateCustomerById
);

router.delete(
  "/:customerId",
  [authJwt.verifyToken, authJwt.isAdmin],
  customerCtrl.deleteCustomerById
);

export default router;