import express from "express";
import { PrismaClient } from "@prisma/client";
const { flight, customer } = new PrismaClient();

export const DisplayFlights = async (reg, res) => {
  try {
    const flights = await flight.findMany();
    res.send(flights);
  } catch (error) {
    console.log(error);
  }
};



