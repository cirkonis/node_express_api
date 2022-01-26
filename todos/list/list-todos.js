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
exports.listTodos = void 0;
const mysql_connection_1 = __importDefault(require("../../mysql/mysql-connection"));
function listTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        let todosList = [];
        let results;
        const queryString = `SELECT T.id, category.category, status.status, T.title, T.description, assignee.name as assignee_name, assignee.email as assignee_email, assigned.name as assigned_name, assigned.email as assigned_email, date_added, date_completed from Todo T
JOIN Status status on T.status = status.id
JOIN Category category on category.id = T.category
JOIN User assignee on assignee.email = T.assignee
JOIN User assigned on assigned.email = T.assigned`;
        results = yield mysql_connection_1.default.query(queryString);
        for (const result of results) {
            todosList.push({
                id: result.id,
                title: result.title,
                description: result.description,
                category: result.category,
                status: result.status,
                assignee: {
                    name: result.assignee_name,
                    email: result.assignee_email,
                },
                assigned: {
                    name: result.assigned_name,
                    email: result.assigned_email,
                },
                dateAdded: result.date_added,
                dateCompleted: result.date_completed
            });
        }
        return Promise.resolve(todosList);
    });
}
exports.listTodos = listTodos;
//# sourceMappingURL=list-todos.js.map