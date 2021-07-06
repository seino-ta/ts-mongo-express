"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userRoutes_1 = __importDefault(require("./userRoutes"));
var homeRoutes_1 = __importDefault(require("./homeRoutes"));
var router = express_1.default.Router();
router.use('/users', userRoutes_1.default);
router.use('/', homeRoutes_1.default);
exports.default = router;
