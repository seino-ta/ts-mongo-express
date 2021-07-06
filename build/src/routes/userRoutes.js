"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var usersController_1 = __importDefault(require("../controllers/usersController"));
var router = express_1.default.Router();
router.get('/', usersController_1.default.index, usersController_1.default.indexView);
router.get('/new', usersController_1.default.new);
router.post('/create', usersController_1.default.create, usersController_1.default.redirectView);
router.get('/:id/edit', usersController_1.default.edit, usersController_1.default.editView);
router.put('/:id/update', usersController_1.default.update, usersController_1.default.redirectView);
router.delete('/:id/delete', usersController_1.default.delete, usersController_1.default.redirectView);
exports.default = router;
