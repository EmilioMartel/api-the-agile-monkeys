import { Router } from "express";
const router = Router();

import * as usersCtrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";

router.post(
  "/create",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
  ],
  usersCtrl.createUser
);

router.get(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  usersCtrl.getUsers
);

router.get("/:userId",
  [authJwt.verifyToken, authJwt.isAdmin],
  usersCtrl.getUserById
);


router.put(
  "/update/:userId",
  [authJwt.verifyToken, authJwt.isAdmin],
  usersCtrl.updateUserById
);

router.delete(
  "/:userId",
  [authJwt.verifyToken, authJwt.isAdmin],
  usersCtrl.deleteUserById
);

export default router;