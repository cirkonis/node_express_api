"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = void 0;
const mysql_connection_1 = __importDefault(require("../../mysql/mysql-connection"));
function updateTodo(todo) {
    return __awaiter(this, void 0, void 0, function* () {
        const statusId = yield mysql_connection_1.default.query(`SELECT Status.id as status_id from Status where Status.status = '${todo.status}';`);
        const queryString = `
UPDATE Todo
SET
status = '${statusId[0].status_id}',
category = '${todo.category}',
assignee = '${todo.assignee.email}',
assigned = '${todo.assigned.email}',
title = '${todo.title}',
description = '${todo.description}',
date_added = CURRENT_DATE(),
date_completed = CURRENT_DATE()
WHERE Todo.id = '${todo.id}'
`;
        yield mysql_connection_1.default.query(queryString);
        return Promise.resolve({ message: "TODO Updated" });
    });
}
exports.updateTodo = updateTodo;
//# sourceMappingURL=update-todo.js.map