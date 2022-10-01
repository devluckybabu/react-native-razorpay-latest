import { orders } from "./orders";
interface options {
    paymentId?: string;
    from?: string;
    to?: string;
    skip?: number;
    count?: number;
}
declare class payments extends orders {
    payments: {
        get: (options?: options | undefined) => Promise<unknown>;
        details: (paymentId: string) => Promise<unknown>;
        update: (paymentId: string, notes: object) => Promise<unknown>;
        capture: (paymentId: string, amount: number, currency: 'INR') => Promise<unknown>;
        refundPayment: (paymentId: string, options?: {
            amount?: number | undefined;
            receipt?: string | undefined;
            speed: 'normal' | 'optimum';
        } | undefined) => Promise<unknown>;
        refunds: (paymentId: string, options?: options | undefined) => Promise<unknown>;
        getRefundDetails: (paymentId: string, refundId: string) => Promise<unknown>;
        createLink: (data: {
            amount: number;
            currency: 'INR' | 'USD';
            first_min_partial_amount: number;
            description?: string;
            reference_id?: string;
            expire_by?: string | number;
            customer?: {
                name?: string;
                contact?: number;
                email?: string;
            };
            notes?: object;
            notify?: {
                sms?: boolean;
                email?: boolean;
            };
            callback_url?: string;
            reminder_enable?: boolean;
            callback_method: 'get' | 'post';
        }) => Promise<unknown>;
        getLinks: (options?: {
            payment_id?: string | undefined;
            reference_id?: string | undefined;
        } | undefined) => Promise<unknown>;
        linkDetails: (linkId: string) => Promise<unknown>;
        updateLink: (linkId: string, data: {
            accept_partial?: boolean;
            reference_id?: string;
            expire_by?: string | number;
            notes?: object;
        }) => Promise<unknown>;
        cancelLink: (linkId: string) => Promise<unknown>;
    };
}
export { payments };
