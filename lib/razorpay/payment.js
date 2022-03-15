// @ts-ignore
import Razorpay from "react-native-razorpay";
import RazorpayConfig from "./index";


class payment extends RazorpayConfig {
  // @ts-ignore
  startPayment = ({ amount,description, currency, order_id, name, user }) => {
   return Razorpay.open({
      key: this.merchant_id,
      order_id, description,
      amount, currency,
      name, frefill: user
    })
  }
}

export  default payment;