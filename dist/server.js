"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server = app_1.default.listen(8081, () => console.log("Server is running at port 8081"));
exports.default = server;
//# sourceMappingURL=server.js.map