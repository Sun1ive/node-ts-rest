"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const statusControllers = require("./controllers/status");
const app = express();
app.set('port', process.env.port || 8081);
app.get('/', statusControllers.hi);
app.post('/awesome', statusControllers.awesome);
exports.default = app;
//# sourceMappingURL=app.js.map