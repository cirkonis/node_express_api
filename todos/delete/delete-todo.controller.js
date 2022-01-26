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
exports.deleteTodoController = void 0;
const delete_todo_1 = require("./delete-todo");
function deleteTodoController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const success = yield (0, delete_todo_1.deleteTodo)(req.params.id);
            res.send(success);
        }
        catch (err) {
            console.error(err);
            res.send(500, { message: 'stuff is busted' });
        }
    });
}
exports.deleteTodoController = deleteTodoController;
//# sourceMappingURL=delete-todo.controller.js.map