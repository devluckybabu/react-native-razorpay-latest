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
exports.subscriptions = void 0;
const convertor = __importStar(require("./convertor"));
const settlements_1 = require("./settlements");
;
class subscriptions extends settlements_1.settlements {
    constructor() {
        super(...arguments);
        this.subscriptions = {
            getPlans: (options) => {
                if (options === null || options === void 0 ? void 0 : options.plan_id)
                    return this.get('/plans/' + (options === null || options === void 0 ? void 0 : options.plan_id));
                else
                    return this.get('/plans', convertor.getOptions(options));
            },
            getSubscriptions: (options) => this.get('/subscriptions', convertor.getOptions(options)),
            planDetails: (planId) => this.get('/plans/' + planId),
            subscriptionDetails: (id) => this.get('/subscriptions/' + id),
            createPlan: (options) => this.post('/plans', options),
            createSubscription: (data) => this.post('/subscriptions', Object.assign(Object.assign({}, data), { start_at: convertor.toDateNumber(data === null || data === void 0 ? void 0 : data.start_at), expiry_by: convertor.toDateNumber(data === null || data === void 0 ? void 0 : data.expiry_by) })),
            cancelSubscription: (id, option) => {
                return this.post(`/subscriptions/${id}/cancel`, { cancel_at_cycle_end: option == "auto" ? 1 : 0 });
            },
            updateSubscription: (sub_id, data) => this.update('/subscriptions/' + sub_id, Object.assign(Object.assign({}, data), { start_at: convertor.toDateNumber(data === null || data === void 0 ? void 0 : data.start_at), schedule_change_at: data.change_at == "auto" ? 'cycle_end' : 'now', customer_notify: (data === null || data === void 0 ? void 0 : data.customer_notify) == false ? 0 : 1 })),
            getPendingSubscriptionUpdate: (id) => {
                return this.get(`/subscriptions/${id}/retrieve_scheduled_changes`);
            },
            concelSubscriptionUpdate: (id) => {
                return this.post(`/subscriptions/${id}/cancel_scheduled_changes`, {});
            },
            pauseSubscription: (subscription_id, pause_at) => {
                return this.post(`/subscriptions/${subscription_id}/pause`, {
                    pause_at: pause_at == "auto" ? undefined : "now"
                });
            },
            resumeSubscription: (subscription_id, resume_at) => {
                return this.post(`/subscriptions/${subscription_id}/resume`, {
                    resume_at: resume_at == "auto" ? undefined : "now"
                });
            },
            getInvoices: (sub_id) => this.get('/invoices?subscription_id=' + sub_id)
        };
    }
}
exports.subscriptions = subscriptions;
;
