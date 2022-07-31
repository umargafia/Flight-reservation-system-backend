import express from "express";
import { PrismaClient } from "@prisma/client";
import { DisplayFlights } from "../general/Controller.js";
const { flight } = new PrismaClient();
const router = express.Router();

router.get("/", DisplayFlights);

export default router;
