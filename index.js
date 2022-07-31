import express from "express";
import bodyParser from "body-parser";
import home from "./routes/user/home.js";
import cors from "cors";
import adminHome from "./routes/admin/adminHome.js";
import flight from "./routes/user/flight.js";
import bookFlight from "./routes/user/bookflight.js";
import payment from "./routes/user/payment.js";

const app = express();
const port = 4000;
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/home", home);
app.use("/adminHome", adminHome);
app.use("/flight", flight);
app.use("/bookFlight", bookFlight);
app.use("/payment", payment);

app.listen(port, () =>
  console.log(` app listening on port http://localhost:${port}`)
);
