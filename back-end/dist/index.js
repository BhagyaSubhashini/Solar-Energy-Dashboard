"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var solar_unit_1 = __importDefault(require("./api/solar-unit"));
var energy_generation_record_1 = __importDefault(require("./api/energy-generation-record"));
var db_1 = require("./infrastructure/db");
var server = (0, express_1.default)();
server.use(express_1.default.json());
server.use("/api/solar-units", solar_unit_1.default);
server.use("/api/energy-generation-records", energy_generation_record_1.default);
(0, db_1.connectDB)();
var PORT = 8002;
server.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
/* Identify the resources
Solar Unit
Energy Generation Record
User
House
*/ 
//# sourceMappingURL=index.js.map