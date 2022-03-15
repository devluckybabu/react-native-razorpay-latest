export default payment;
declare class payment extends RazorpayConfig {
    startPayment: ({ amount, description, image, currency, order_id, name, user, color }: {
        amount: any;
        description: any;
        image: any;
        currency: any;
        order_id: any;
        name: any;
        user: any;
        color: any;
    }) => any;
}
import RazorpayConfig from "./index";
