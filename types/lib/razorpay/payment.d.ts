export default payment;
declare class payment extends RazorpayConfig {
    startPayment: ({ amount, description, currency, order_id, name, user }: {
        amount: any;
        description: any;
        currency: any;
        order_id: any;
        name: any;
        user: any;
    }) => any;
}
import RazorpayConfig from "./index";
