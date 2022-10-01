'use strict';
import { razorpay } from './types/lib/razorpay';
import { NativeModules, NativeEventEmitter } from 'react-native';
import { decode, encode } from 'base-64';
if (!globalThis.atob) globalThis.atob = encode;
if (!globalThis.btoa) globalThis.btoa = decode;

const razorpayEvents = new NativeEventEmitter(NativeModules.RazorpayEventEmitter);

const removeSubscriptions = () => {
  razorpayEvents.removeAllListeners('Razorpay::PAYMENT_SUCCESS');
  razorpayEvents.removeAllListeners('Razorpay::PAYMENT_ERROR');
  razorpayEvents.removeAllListeners('Razorpay::EXTERNAL_WALLET_SELECTED');
};

interface options {
  name?: string;
  image?: string;
  amount: string;
  description?: string;
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
    return new Promise(function (resolve, reject) {
      razorpayEvents.addListener('Razorpay::PAYMENT_SUCCESS', (data: any) => {
        let resolveFn = successCallback || resolve;
        resolveFn(data);
        removeSubscriptions();
      });
      razorpayEvents.addListener('Razorpay::PAYMENT_ERROR', (data: any) => {
        let rejectFn = errorCallback || reject;
        rejectFn(data);
        removeSubscriptions();
      });
      NativeModules.RNRazorpayCheckout.open(options);
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
