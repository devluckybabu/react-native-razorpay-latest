import { payments } from "./payments";
declare class paymentLinks extends payments {
    paymentLinks: {
        get: (options?: {
            payment_id?: string | undefined;
            reference_id?: string | undefined;
        } | undefined) => Promise<unknown>;
        create: (linkId: string) => Promise<unknown>;
        update: (linkId: string, data: {
            accept_partial?: boolean | undefined;
            reference_id?: string | undefined;
            expire_by?: string | number | undefined;
            notes?: object | undefined;
        }) => Promise<unknown>;
        cancel: (linkId: string) => Promise<unknown>;
    };
}
export { paymentLinks };
