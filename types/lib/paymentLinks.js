"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentLinks = void 0;
const payments_1 = require("./payments");
class paymentLinks extends payments_1.payments {
    constructor() {
        super(...arguments);
        this.paymentLinks = {
            get: this.payments.getLinks,
            create: this.payments.cancelLink,
            update: this.payments.updateLink,
            cancel: this.payments.cancelLink
        };
    }
}
exports.paymentLinks = paymentLinks;
;
