import { qrcodes } from "./qrcodes";
interface options {
    refundId?: string;
    from?: string;
    to?: string;
    skip?: number;
    count?: number;
}
declare class razorpay extends qrcodes {
    refunds: {
        get: (options?: options | undefined) => Promise<unknown>;
        details: (refundId: string) => Promise<unknown>;
        refundPayment: (paymentId: string, options?: {
            amount?: number | undefined;
            receipt?: string | undefined;
            speed: "normal" | "optimum";
        } | undefined) => Promise<unknown>;
        update: (refundId: string, notes: object) => Promise<unknown>;
    };
}
export { razorpay };
