"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./lib/razorpay/config"));
class config extends config_1.default {
    constructor() {
        super(...arguments);
        this.get = {
            orders: (options) => {
                if (options === null || options === void 0 ? void 0 : options.id) {
                    return this.call('/orders/' + (options === null || options === void 0 ? void 0 : options.id), options);
                }
                ;
                return this.call('/orders/all', options);
            },
            payments: (options) => {
                if (options === null || options === void 0 ? void 0 : options.id) {
                    return this.call('/payments/' + (options === null || options === void 0 ? void 0 : options.id), options);
                }
                ;
                return this.call('/payments/all', options);
            },
            refunds: (options) => {
                if (options === null || options === void 0 ? void 0 : options.id) {
                    return this.call('/refunds/' + (options === null || options === void 0 ? void 0 : options.id), options);
                }
                ;
                return this.call('/refunds/all', options);
            },
            settlements: (options) => {
                if (options === null || options === void 0 ? void 0 : options.id) {
                    return this.call('/settlements/' + (options === null || options === void 0 ? void 0 : options.id), options);
                }
                ;
                return this.call('/settlements/all', options);
            },
        };
        this.create = {
            order: (options) => this.call('/orders/create', options),
            item: (options) => this.call('/items/create', options),
        };
        this.update = {
            order: (orderId, data) => this.call('/orders/update', Object.assign({ id: orderId }, data)),
            payment: (paymentId, data) => this.call('/payments/update', { paymentId, notes: data })
        };
        this.payments = {
            refund: (paymentId) => {
                return this.call('/payments/refund', { paymentId });
            },
            capture: (options) => {
                return this.call('/payments/capture', options);
            },
            refundStatus: (options) => {
                return this.call('/payments/refund_status', options);
            },
            status: (paymentId) => this.call('/payments/' + paymentId),
            update: (options) => this.call('/payments/update', options),
            transfer: (options) => this.call('/payments/transfer', options),
            bankTransfer: (paymentId) => this.call('/payments/bank_transfer', { paymentId }),
            cardDetails: (paymentId) => this.call('/payments/card_details', { paymentId }),
            tranferDetails: (paymentId) => this.call('/payments/transfer_details', { paymentId }),
            onSubmitOtp: (paymentId) => this.call('/payments/otp_submit', { paymentId })
        };
        this.getDowntime = () => this.call('/payments/downtime');
        this.settlements = {
            get: (options) => {
                if (options === null || options === void 0 ? void 0 : options.id) {
                    return this.call('/settlements/' + options.id);
                }
                ;
                return this.call('/settlements/all', Object.assign(Object.assign({}, options), { skip: (options === null || options === void 0 ? void 0 : options.skip) ? 1 : 0 }));
            },
            create: (data) => this.call('/settlements/create', data)
        };
    }
}
const RazorpayAPI = { config };
exports.default = RazorpayAPI;
//# sourceMappingURL=index.js.map