'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const razorpay_1 = require("./lib/razorpay");
const react_native_1 = require("react-native");
const base_64_1 = require("base-64");
if (!globalThis.atob)
    globalThis.atob = base_64_1.encode;
if (!globalThis.btoa)
    globalThis.btoa = base_64_1.decode;
const razorpayEvents = new react_native_1.NativeEventEmitter(react_native_1.NativeModules.RazorpayEventEmitter);
const removeSubscriptions = () => {
    razorpayEvents.removeAllListeners('Razorpay::PAYMENT_SUCCESS');
    razorpayEvents.removeAllListeners('Razorpay::PAYMENT_ERROR');
    razorpayEvents.removeAllListeners('Razorpay::EXTERNAL_WALLET_SELECTED');
};
class Razorpay extends razorpay_1.razorpay {
    makePaymet(options, successCallback, errorCallback) {
        return new Promise(function (resolve, reject) {
            razorpayEvents.addListener('Razorpay::PAYMENT_SUCCESS', (data) => {
                let resolveFn = successCallback || resolve;
                resolveFn(data);
                removeSubscriptions();
            });
            razorpayEvents.addListener('Razorpay::PAYMENT_ERROR', (data) => {
                let rejectFn = errorCallback || reject;
                rejectFn(data);
                removeSubscriptions();
            });
            react_native_1.NativeModules.RNRazorpayCheckout.open(options);
        });
    }
    onExternalWalletSelection(externalWalletCallback) {
        razorpayEvents.addListener('Razorpay::EXTERNAL_WALLET_SELECTED', (data) => {
            externalWalletCallback(data);
            removeSubscriptions();
        });
    }
}
exports.default = Razorpay;
