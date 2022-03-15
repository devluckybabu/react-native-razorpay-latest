"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const payment_1 = __importDefault(require("./lib/razorpay/payment"));
const Razorpay = { config: payment_1.default };
exports.default = Razorpay;
//# sourceMappingURL=index.js.map