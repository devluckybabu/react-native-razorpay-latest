import { settlements } from "./settlements";
interface options {
    plan_id?: string;
    from?: string;
    to?: string;
    skip?: number;
    count?: number;
}
declare class subscriptions extends settlements {
    subscriptions: {
        getPlans: (options?: options | undefined) => Promise<unknown>;
        getSubscriptions: (options?: options | undefined) => Promise<unknown>;
        planDetails: (planId: string) => Promise<unknown>;
        subscriptionDetails: (id: string) => Promise<unknown>;
        createPlan: (options: {
            period: 'daily' | 'weekly' | 'monthly' | 'yearly';
            interval: number;
            item: {
                name: string;
                amount: number;
                currency: 'INR' | 'USD';
                description?: string;
            };
            notes?: object;
        }) => Promise<unknown>;
        createSubscription: (data: {
            plan_id: string;
            total_count: number;
            quantity?: number;
            start_at?: number | string;
            expiry_by?: number | string;
            customer_notify?: boolean;
            addon?: [
                item: {
                    name?: string;
                    amount?: number;
                    currency?: 'INR' | "USD";
                }
            ];
            offer_id?: string;
            notes?: object;
        }) => Promise<unknown>;
        cancelSubscription: (id: string, option: 'immediately' | 'auto') => Promise<unknown>;
        updateSubscription: (sub_id: string, data: {
            plan_id?: string;
            offer_id?: string;
            quantity?: number;
            remaining_count?: number;
            start_at: string | number;
            change_at?: 'immediately' | 'auto';
            customer_notify?: boolean;
        }) => Promise<unknown>;
        getPendingSubscriptionUpdate: (id: string) => Promise<unknown>;
        concelSubscriptionUpdate: (id: string) => Promise<unknown>;
        pauseSubscription: (subscription_id: string, pause_at: 'immediately' | 'auto') => Promise<unknown>;
        resumeSubscription: (subscription_id: string, resume_at: 'immediately' | 'auto') => Promise<unknown>;
        getInvoices: (sub_id: string) => Promise<unknown>;
    };
}
export { subscriptions };
