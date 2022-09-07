#!/usr/bin/env node
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
const gradient_string_1 = __importDefault(require("gradient-string"));
const axios_1 = __importDefault(require("axios"));
const nanospinner_1 = require("nanospinner");
const loadingSpinner = (0, nanospinner_1.createSpinner)("Loading");
loadingSpinner.start();
setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get("https://uselessfacts.jsph.pl/random.json?language=en");
    loadingSpinner.stop();
    console.log(gradient_string_1.default.rainbow(response.data.text));
}), 500);
