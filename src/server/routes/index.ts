import { Router } from "express";

import { CidadesController } from "../controllers/cidades";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Ola Dev");
});

router.post("/cidades", CidadesController.create);

export { router };
