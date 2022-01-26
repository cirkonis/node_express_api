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
exports.listTodosController = void 0;
const list_todos_1 = require("./list-todos");
function listTodosController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let todos;
            todos = yield (0, list_todos_1.listTodos)();
            res.send({ data: todos });
        }
        catch (err) {
            console.error(err);
            res.send(500, { message: "Stuff is busted" });
        }
    });
}
exports.listTodosController = listTodosController;
//# sourceMappingURL=list-todos.controller.js.map