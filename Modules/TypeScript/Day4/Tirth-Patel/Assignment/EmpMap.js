"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpMap = void 0;
const Employee_1 = require("./Employee");
var EmpMap = new Map();
exports.EmpMap = EmpMap;
for (var emp of Employee_1.Employees) {
    EmpMap.set(emp.ID, emp);
}
