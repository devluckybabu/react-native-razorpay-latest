import { customers } from "./customers";
declare class addons extends customers {
    addons: {
        get: (options?: {
            from?: string | number | undefined;
            to?: string | number | undefined;
            skip?: number | undefined;
            count?: number | undefined;
        } | undefined) => Promise<unknown>;
        create: (sub_id: string, data: {
            item: {
                name: string;
                amount: number;
                currency: 'INR' | 'USD';
                description?: string;
            };
            quantity?: number;
        }) => Promise<unknown>;
        delete: (addon_id: string) => Promise<unknown>;
    };
}
export { addons };
