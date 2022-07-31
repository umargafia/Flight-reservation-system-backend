import express from "express";
import { PrismaClient } from "@prisma/client";
import { DisplayFlights } from "../general/Controller.js";
const prisma = new PrismaClient();
const router = express.Router();

const {  } = prisma;



export default router;
