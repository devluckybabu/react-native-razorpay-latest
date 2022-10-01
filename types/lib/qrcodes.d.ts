import { addons } from "./addons";
declare class qrcodes extends addons {
    qrcodes: {
        get: (options?: {
            from?: string | number | undefined;
            to?: string | number | undefined;
            skip?: number | undefined;
            count?: number | undefined;
            payment_id?: string | undefined;
            customer_id?: string | undefined;
        } | undefined) => Promise<unknown>;
        create: (options: {
            type: 'upi_qr' | 'bharat_qr';
            usage: 'single_use' | 'multiple_use';
            store_name?: string;
            fixed_amount?: boolean;
            payment_amount?: number;
            customer_id?: string;
            description?: string;
            close_by?: string;
            notes?: object;
            tax_invoice?: {
                business_gstin: string;
                gst_amount: number;
                cess_amount?: number;
                number?: string;
                date?: number;
                customer_name?: string;
                supply_type?: 'interstate';
            };
        }) => Promise<unknown>;
        details: (qrCodeId: string) => Promise<unknown>;
    };
}
export { qrcodes };
