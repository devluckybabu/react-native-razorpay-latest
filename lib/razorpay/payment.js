// @ts-ignore
import Razorpay from "react-native-razorpay";
import RazorpayConfig from "./index";


class payment extends RazorpayConfig {
  // @ts-ignore
  startPayment = ({ amount, description, image, currency, order_id, name, user, color }) => {
    return Razorpay.open({
      key: this.merchant_id,
      image, order_id, description,
      amount, currency,
      name, prefill: user,
      theme: { color }
    })
  }
}

export default payment;