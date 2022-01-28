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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodoController = void 0;
const create_todo_1 = require("./create-todo");
function createTodoController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todo = yield (0, create_todo_1.createTodo)(req.body);
            res.send({ data: todo });
        }
        catch (err) {
            console.error(err);
            res.send(500, { message: 'stuff is busted' });
        }
    });
}
exports.createTodoController = createTodoController;
//# sourceMappingURL=create-todo.controller.js.map