"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = "https://onlinefreeapi.herokuapp.com/api/razorpay";
class Config {
    constructor(author) {
        this.call = (path, options) => {
            return new Promise((resolve, reject) => {
                fetch(url + path, {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "merchant_id": this.merchant_id,
                        "secret_key": this.secret_key
                    },
                    body: JSON.stringify(options)
                }).then((res) => res.json()).then((result) => {
                    if (result === null || result === void 0 ? void 0 : result.error)
                        return reject(result);
                    else
                        return resolve(result);
                }).catch((error) => reject(error));
            });
        };
        this.merchant_id = author.merchantId;
        this.secret_key = author.secretKey;
    }
    ;
}
;
exports.default = Config;
//# sourceMappingURL=config.js.map