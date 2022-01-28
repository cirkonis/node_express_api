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
exports.createTodo = void 0;
const uuid_1 = require("uuid");
const mysql_connection_1 = __importDefault(require("../../mysql/mysql-connection"));
let todoToCreate;
function createTodo(todo) {
    return __awaiter(this, void 0, void 0, function* () {
        const statusId = yield mysql_connection_1.default.query(`SELECT Status.id as status_id from Status where Status.status = '${todo.status}';`);
        todoToCreate = Object.assign({ id: (0, uuid_1.v4)() }, todo);
        const queryString = `INSERT INTO Todo(id, status, category, assignee, assigned, title, description, date_added, date_completed)
VALUES (
'${todoToCreate.id}',
'${statusId[0].status_id}',
'${todoToCreate.category}',
'${todoToCreate.assignee.email}',
'${todoToCreate.assigned.email}',
'${todoToCreate.title}',
'${todoToCreate.description}',
CURRENT_DATE(),
CURRENT_DATE()
)`;
        yield mysql_connection_1.default.query(queryString);
        return Promise.resolve(todoToCreate);
    });
}
exports.createTodo = createTodo;
//# sourceMappingURL=create-todo.js.map