"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.payments = void 0;
const convertor = __importStar(require("./convertor"));
const orders_1 = require("./orders");
const isValid = (value, type) => {
    return value && typeof value === type;
};
;
class payments extends orders_1.orders {
    constructor() {
        super(...arguments);
        this.payments = {
            get: (options) => {
                if (options === null || options === void 0 ? void 0 : options.paymentId)
                    return this.get('/payments/' + (options === null || options === void 0 ? void 0 : options.paymentId));
                else
                    return this.get('/payments', convertor.getOptions(options));
            },
            details: (paymentId) => this.get('/payments/' + paymentId),
            update: (paymentId, notes) => {
                return new Promise((resolve, reject) => {
                    if (isValid(paymentId, "string") && isValid(notes, "object")) {
                        this.update('/payments/' + paymentId, { notes }).then((result) => {
                            return resolve(result);
                        }).catch((error) => reject(error));
                    }
                    else if (!isValid(paymentId, 'string')) {
                        return reject({ error: true, message: 'Payment ID must be a string' });
                    }
                    else if (!isValid(notes, 'object')) {
                        return reject({ error: true, message: 'Notes must be an object' });
                    }
                });
            },
            capture: (paymentId, amount, currency) => {
                return new Promise((resolve, reject) => {
                    if (paymentId && isValid(amount, 'number') && isValid(currency, 'string')) {
                        this.post('/payments/' + paymentId + '/capture', { amount, currency })
                            .then((result) => resolve(result)).catch((error) => reject(error));
                    }
                    else if (!paymentId) {
                        return reject({ error: true, message: 'Payment Id is required parameter.' });
                    }
                    else if (!isValid(amount, 'number')) {
                        return reject({ error: true, message: 'Amount is required parameter.' });
                    }
                    else if (!isValid(currency, 'string')) {
                        return reject({ error: true, message: 'Currency is required parameter.' });
                    }
                });
            },
            refundPayment: (paymentId, options) => {
                return new Promise((resolve, reject) => {
                    if (isValid(paymentId, "string")) {
                        if (options && !(options === null || options === void 0 ? void 0 : options.speed)) {
                            return reject({ error: true, message: 'Speed is required parameter' });
                        }
                        ;
                        this.post('/payments/' + paymentId + '/refund', options !== null && options !== void 0 ? options : {})
                            .then((result) => resolve(result)).catch((error) => reject(error));
                    }
                    else {
                        return reject({ error: true, message: 'Payment Id is required parameter' });
                    }
                });
            },
            refunds: (paymentId, options) => {
                return this.get('/payments/' + paymentId + '/refunds', convertor.getOptions(options));
            },
            getRefundDetails: (paymentId, refundId) => {
                return this.get(`/payments/${paymentId}/refunds/${refundId}`);
            },
            createLink: (data) => this.post('/payment-links', Object.assign(Object.assign({}, data), { expiry_by: convertor.toDateNumber(data === null || data === void 0 ? void 0 : data.expire_by) })),
            getLinks: (options) => this.get('/payment-links', options),
            linkDetails: (linkId) => this.get('/payment-links/' + linkId),
            updateLink: (linkId, data) => this.update('/payment-links/' + linkId, Object.assign(Object.assign({}, data), { expiry_by: convertor.toDateNumber(data === null || data === void 0 ? void 0 : data.expire_by) })),
            cancelLink: (linkId) => this.post(`/payment-links/${linkId}/cancel`, {})
        };
    }
}
exports.payments = payments;
;
