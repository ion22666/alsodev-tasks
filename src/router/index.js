"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_router_1 = require("vue-router");
const Home_vue_1 = __importDefault(require("../views/Home.vue"));
const Restaurant_vue_1 = __importDefault(require("../views/Restaurant.vue"));
exports.default = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(),
    routes: [
        {
            path: '/',
            component: Home_vue_1.default,
        },
        {
            path: '/about',
            component: Restaurant_vue_1.default,
        },
    ],
});
