import express from "express";
import { PrismaClient } from "@prisma/client";
import { DisplayFlights } from "../general/Controller.js";
const prisma = new PrismaClient();
const router = express.Router();

const { payment, flight, customer } = prisma;

router.post("/", async (reg, res) => {
  const { card_number, card_name, expire_date, cvv, ispaid, customer_id } =
    reg.body;
  try {
    await payment.create({
      data: {
        customer_id,
        card_number,
        card_name,
        expire_date,
        cvv,
        ispaid,
      },
    });
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ card_number, card_name, expire_date, cvv, ispaid });
});

router.get("/:fId", async (reg, res) => {
  const { fId} = reg.params;

  // try {
  //   const flights = await flight.findFirst({
  //     where: {
  //       flight_id: parseInt(fId),
  //     },
  //   });
  //    res.send({ flights });
  // } catch (error) {}

  try {
    const customers = await customer.findFirst({
      // where: {
      //   customer_id: fId,
      // },
    });
    res.send(customers);
  } catch (error) {}
});

export default router;

// where: {
//   flight_id: flId,
// },
