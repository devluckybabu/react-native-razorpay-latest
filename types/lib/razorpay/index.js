"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
class RazorpayConfig extends config_1.default {
    constructor() {
        super(...arguments);
        this.get = (type, options, extra) => {
            if (options === null || options === void 0 ? void 0 : options.id) {
                return this.call(`/${type}/${options === null || options === void 0 ? void 0 : options.id}`);
            }
            else {
                const all_options = options && typeof options == "object" ? options : {};
                const ex_options = extra && typeof extra == "object" ? extra : {};
                return this.call(`/${type}/all`, Object === null || Object === void 0 ? void 0 : Object.assign(all_options, ex_options));
            }
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
exports.default = RazorpayConfig;
//# sourceMappingURL=index.js.map