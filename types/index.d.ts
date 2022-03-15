import Config from "./lib/razorpay/config";
declare type options = {
    id?: string;
    from?: string;
    to: string;
    skip?: boolean;
    count?: number;
    receipt?: string;
};
declare class config extends Config {
    get: {
        orders: (options: options) => Promise<unknown>;
        payments: (options: options) => Promise<unknown>;
        refunds: (options: options) => Promise<unknown>;
        settlements: (options: options) => Promise<unknown>;
    };
    create: {
        order: (options: {
            amount: number;
            receipt?: string;
            method?: string;
            notes?: object;
            currency: "INR" | "USD";
            payment_catpture?: string;
        }) => Promise<unknown>;
        item: (options: {
            amount: number;
            receipt?: string;
            notes?: object;
            currency: "INR" | "USD";
        }) => Promise<unknown>;
    };
    update: {
        order: (orderId: string, data: object) => Promise<unknown>;
        payment: (paymentId: string, data: object) => Promise<unknown>;
    };
    payments: {
        refund: (paymentId: string) => Promise<unknown>;
        capture: (options: {
            paymentId: string;
            amount: number;
            currency?: string;
        }) => Promise<unknown>;
        refundStatus: (options: {
            paymentId: string;
            refundId: string;
        }) => Promise<unknown>;
        status: (paymentId: string) => Promise<unknown>;
        update: (options: {
            paymentId: string;
            notes: object;
        }) => Promise<unknown>;
        transfer: (options: {
            paymentId: string;
            notes?: object;
        }) => Promise<unknown>;
        bankTransfer: (paymentId: string) => Promise<unknown>;
        cardDetails: (paymentId: string) => Promise<unknown>;
        tranferDetails: (paymentId: string) => Promise<unknown>;
        onSubmitOtp: (paymentId: string) => Promise<unknown>;
    };
    getDowntime: () => Promise<unknown>;
    settlements: {
        get: (options?: {
            id?: string | undefined;
            from?: string | undefined;
            to: string;
            skip?: boolean | undefined;
            count?: number | undefined;
        } | undefined) => Promise<unknown>;
        create: (data: object) => Promise<unknown>;
    };
}
declare const RazorpayAPI: {
    config: typeof config;
};
export default RazorpayAPI;
