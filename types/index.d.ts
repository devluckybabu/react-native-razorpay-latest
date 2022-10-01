import { razorpay } from './lib/razorpay';
interface options {
    name?: string;
    image?: string;
    amount: string;
    description?: string;
    prefill?: {
        name?: string;
        email?: string;
        contact?: string | number;
    };
    theme?: {
        color: string;
    };
}
declare type callback = (data?: any) => void;
declare class Razorpay extends razorpay {
    makePaymet(options: options, successCallback: callback, errorCallback: callback): Promise<unknown>;
    onExternalWalletSelection(externalWalletCallback: callback): void;
}
export default Razorpay;
