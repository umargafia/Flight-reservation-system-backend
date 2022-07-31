import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();

const { customer } = prisma;

router.post("/", async (reg, res) => {
         
  const {
    firstname,
    surname,
    address,
    email,
    othername,
    phone_number,
    no_children,
    no_adults,
  } = reg.body;
  try {
    await customer.create({
        data: {
        firstname,
        surname,
        address,
        email,
        othername,
        phone_number,
        no_children,
        no_adults,
      },
    });
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({
    firstname,
    surname,
    address,
    email,
    othername,
    phone_number,
    no_children,
    no_adults,
  });
});

export default router;
