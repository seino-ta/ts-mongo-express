"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_list_endpoints_1 = __importDefault(require("express-list-endpoints"));
var path_1 = __importDefault(require("path"));
var routes_1 = __importDefault(require("./routes"));
var express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
var mongoose_1 = __importDefault(require("mongoose"));
//import bodyParser from 'body-parser'
var method_override_1 = __importDefault(require("method-override"));
mongoose_1.default.connect('mongodb://nota:nota@localhost:27017/test_db?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose_1.default.Promise = global.Promise;
var app = express_1.default();
var port = 3000;
app.set('view engine', 'ejs');
app.set('views', path_1.default.resolve(__dirname, 'views'));
app.use(express_ejs_layouts_1.default);
app.use(express_1.default.static(__dirname + '/public'));
app.use('/', routes_1.default);
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(method_override_1.default('_method', {
    methods: ['POST', 'GET']
}));
app.listen(port, function () {
    console.log('server start');
    console.log(express_list_endpoints_1.default(app));
});
