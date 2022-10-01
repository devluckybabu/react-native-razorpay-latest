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
exports.customers = void 0;
const convertor = __importStar(require("./convertor"));
const subscriptions_1 = require("./subscriptions");
;
class customers extends subscriptions_1.subscriptions {
    constructor() {
        super(...arguments);
        this.customers = {
            get: (options) => {
                if (options === null || options === void 0 ? void 0 : options.customer_id)
                    return this.get('/customers/' + (options === null || options === void 0 ? void 0 : options.customer_id));
                else
                    return this.get('/customers', convertor.getOptions(options));
            },
            details: (customer_id) => this.get('/customers/' + customer_id),
            create: (data) => this.post('/customers', Object.assign(Object.assign({}, data), { fail_existing: (data === null || data === void 0 ? void 0 : data.fail_existing) == false ? 0 : 1 })),
            update: (customer_id, data) => this.update('/customers/' + customer_id, data)
        };
    }
}
exports.customers = customers;
;
