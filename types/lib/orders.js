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
exports.orders = void 0;
const api_1 = require("./api");
const convertor = __importStar(require("./convertor"));
;
class orders extends api_1.API {
    constructor() {
        super(...arguments);
        this.orders = {
            get: (options) => {
                if (options === null || options === void 0 ? void 0 : options.orderId)
                    return this.get('/orders/' + (options === null || options === void 0 ? void 0 : options.orderId));
                else
                    return this.get('/orders', convertor.orderOptions(options));
            },
            details: (orderId) => this.get('/orders/' + orderId),
            create: (data) => this.post('/orders', data),
            peyments: (orderId) => this.get('/orders/' + orderId + '/payments'),
            update: (orderId, notes) => this.update('/orders/' + orderId, { notes })
        };
    }
}
exports.orders = orders;
;
