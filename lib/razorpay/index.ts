import Config from "./config";


class RazorpayConfig extends Config {
  get = (
    type: "orders" | "payments" | "items" | "refunds" | "settlements",
    options?: {
      id?: string; from?: string;
      to: string; skip?: boolean;
      count?: number; receipt?: string;
    },
    extra?: object
  ) => {
    if (options?.id) {
      return this.call(`/${type}/${options?.id}`);
    } else {
      const all_options = options && typeof options == "object" ? options : {};
      const ex_options = extra && typeof extra == "object" ? extra : {};
      return this.call(`/${type}/all`, Object?.assign(all_options, ex_options));
    }
  };
  create = {
    order: (options: {
      amount: number;
      receipt?: string;
      method?: string;
      notes?: object;
      currency: "INR" | "USD",
      payment_catpture?: string;
    }) => this.call('/orders/create', options),
    item: (options: {
      amount: number;
      receipt?: string;
      notes?: object;
      currency: "INR" | "USD",
    }) => this.call('/items/create', options),
  };
  update = {
    order: (orderId: string, data: object) => this.call('/orders/update', { id: orderId, ...data }),
    payment: (paymentId: string, data: object) => this.call('/payments/update', { paymentId, notes: data })
  };
  payments = {
    //refund payment
    refund: (paymentId: string) => {
      return this.call('/payments/refund', { paymentId })
    },

    //capture payment
    capture: (options: { paymentId: string, amount: number, currency?: string }) => {
      return this.call('/payments/capture', options)
    },
    //refund status
    refundStatus: (options: { paymentId: string, refundId: string; }) => {
      return this.call('/payments/refund_status', options);
    },
    //payment status
    status: (paymentId: string) => this.call('/payments/' + paymentId),
    //update paument details
    update: (options: { paymentId: string, notes: object }) => this.call('/payments/update', options),
    //transfer payment
    transfer: (options: { paymentId: string, notes?: object }) => this.call('/payments/transfer', options),
    //transfer payment to bank
    bankTransfer: (paymentId: string) => this.call('/payments/bank_transfer', { paymentId }),
    //get card details of payment
    cardDetails: (paymentId: string) => this.call('/payments/card_details', { paymentId }),
    //get transfer details
    tranferDetails: (paymentId: string) => this.call('/payments/transfer_details', { paymentId }),
    //submit otp of payment
    onSubmitOtp: (paymentId: string) => this.call('/payments/otp_submit', { paymentId })
  };
  getDowntime = () => this.call('/payments/downtime');
  settlements = {
    get: (options?: {
      id?: string; from?: string;
      to: string; skip?: boolean;
      count?: number;
    }) => {
      if (options?.id) {
        return this.call('/settlements/' + options.id);
      };
      return this.call('/settlements/all', { ...options, skip: options?.skip ? 1 : 0 });
    },
    create: (data: object) => this.call('/settlements/create', data)
  }
}

export default RazorpayConfig;