"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_razorpay_1 = __importDefault(require("react-native-razorpay"));
const index_1 = __importDefault(require("./index"));
class payment extends index_1.default {
    constructor() {
        super(...arguments);
        this.startPayment = ({ amount, description, currency, order_id, name, user }) => {
            return react_native_razorpay_1.default.open({
                key: this.merchant_id,
                order_id, description,
                amount, currency,
                name, frefill: user
            });
        };
    }
}
exports.default = payment;
//# sourceMappingURL=payment.js.map