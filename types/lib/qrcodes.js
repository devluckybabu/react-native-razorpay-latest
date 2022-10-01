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
exports.qrcodes = void 0;
const addons_1 = require("./addons");
const convertor = __importStar(require("./convertor"));
class qrcodes extends addons_1.addons {
    constructor() {
        super(...arguments);
        this.qrcodes = {
            get: (options) => this.get(`/payments/qr_codes`, convertor.getOptions(options)),
            create: (options) => this.post('/payments/qr_codes', Object.assign(Object.assign({}, options), { name: options.store_name, close_by: convertor.toDateNumber(options.close_by) })),
            details: (qrCodeId) => this.get(`/payments/qr_codes/${qrCodeId}`)
        };
    }
}
exports.qrcodes = qrcodes;
;
