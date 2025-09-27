import express from "express";
import solarUnitRouter from "./api/solar-unit.js";

const server = express();
server.use(express.json());

server.use("/api/solar-units", solarUnitRouter);


const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
