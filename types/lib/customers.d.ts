import { subscriptions } from "./subscriptions";
interface options {
    customer_id?: string;
    skip?: number;
    count?: number;
}
declare class customers extends subscriptions {
    customers: {
        get: (options?: options | undefined) => Promise<unknown>;
        details: (customer_id: string) => Promise<unknown>;
        create: (data: {
            name: string;
            contact?: number;
            email?: string;
            fail_existing?: boolean;
            gstin?: string;
            notes?: object;
        }) => Promise<unknown>;
        update: (customer_id: string, data: {
            name?: string;
            email: string;
            contact: number;
        }) => Promise<unknown>;
    };
}
export { customers };
