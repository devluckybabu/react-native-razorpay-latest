import Config from "./config";
declare class RazorpayConfig extends Config {
    get: (type: "orders" | "payments" | "items" | "refunds" | "settlements", options?: {
        id?: string | undefined;
        from?: string | undefined;
        to: string;
        skip?: boolean | undefined;
        count?: number | undefined;
        receipt?: string | undefined;
    } | undefined, extra?: object | undefined) => Promise<unknown>;
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
export default RazorpayConfig;
