import express from "express";
import { PrismaClient } from "@prisma/client";
import { DisplayFlights } from "../general/Controller.js";
const prisma = new PrismaClient();
const router = express.Router();

router.get("/", DisplayFlights);

router.get("/:id", async (reg, res) => {
  const { id } = reg.params;
  try {
   const flights= await prisma.flight.findUnique({
      where: {
        flight_id: parseInt(id),
      },
    });
    res.send(flights);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (reg, res) => {
  const { flightName, start, stop, date, hours, price, time } = reg.body;

  try {
    await prisma.flight.create({
      data: {
        flight_name: flightName,
        start: start,
        stop: stop,
        date: date,
        hours: parseInt(hours),
        price: parseInt(price),
        time: time,
      },
    });
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ flightName, start, stop, date, hours, price });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.flight.delete({
      where: {
        flight_id: parseInt(id),
      },
    });
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ message: "deleated succesfully" });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { flightName, start, stop, date, hours, price, time } = req.body;

  try {
    await prisma.flight.update({
      where: {
        flight_id: parseInt(id),
      },
      data: {
        flight_name: flightName,
        start,
        stop,
        date,
        hours,
        price,
        time,
      },
    });
  } catch (error) {}

  res.status(200).json({ message: "updated succesfully" });
});

export default router;
