"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var homeController_1 = __importDefault(require("../controllers/homeController"));
var router = express_1.default.Router();
router.get('/', homeController_1.default.index);
exports.default = router;
