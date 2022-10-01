'use strict';
import { NativeModules, NativeEventEmitter } from 'react-native';
import { razorpay } from './types/lib/razorpay';
import { decode, encode } from 'base-64';
if (!globalThis.atob) globalThis.atob = decode;
if (!globalThis.btoa) globalThis.btoa = encode;

const razorpayEvents = new NativeEventEmitter(NativeModules.RazorpayEventEmitter);

const removeSubscriptions = () => {
  razorpayEvents.removeAllListeners('Razorpay::PAYMENT_SUCCESS');
  razorpayEvents.removeAllListeners('Razorpay::PAYMENT_ERROR');
  razorpayEvents.removeAllListeners('Razorpay::EXTERNAL_WALLET_SELECTED');
};

interface options {
  name?: string;
  image?: string;
  description?: string;
  amount: string | number;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string | number;
  },
  theme?: { color: string }
}
type callback = (data?: any) => void;



class Razorpay extends razorpay {
  makePaymet(options: options, successCallback: callback, errorCallback: callback) {
    return new Promise((resolve, reject) => {
      razorpayEvents.addListener('Razorpay::PAYMENT_SUCCESS', (data: any) => {
        let resolveFn = successCallback || resolve;
        resolveFn(data);
        removeSubscriptions();
      });
      razorpayEvents.addListener('Razorpay::PAYMENT_ERROR', (error: any) => {
        let rejectFn = errorCallback || reject;
        rejectFn(error);
        removeSubscriptions();
      });
      NativeModules.RNRazorpayCheckout.open({ ...options, key: this.username });
    });
  }
  onExternalWalletSelection(externalWalletCallback: callback) {
    razorpayEvents.addListener('Razorpay::EXTERNAL_WALLET_SELECTED', (data: any) => {
      externalWalletCallback(data);
      removeSubscriptions();
    });
  }
}
export default Razorpay;
