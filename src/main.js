"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_beans_1 = require("express-beans");
var health_1 = require("@/routes/health");
var requestLogger_1 = require("@/interceptors/requestLogger");
var exampleRouter_1 = require("@/routes/exampleRouter");
var app = new express_beans_1.ExpressBeans({
    routerBeans: [
        exampleRouter_1.default,
    ],
});
app.use(requestLogger_1.default);
app.use('/n', health_1.router);
