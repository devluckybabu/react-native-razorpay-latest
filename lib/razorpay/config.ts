const url = "https://onlinefreeapi.herokuapp.com/api/razorpay"
class Config {
  protected merchant_id: string;
  private secret_key: string;
  constructor(author: { merchantId: string; secretKey: string }) {
    this.merchant_id = author.merchantId;
    this.secret_key = author.secretKey;
  };
  protected call = (path: string, options?: object) => {
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
        if (result?.error) return reject(result);
        else return resolve(result);
      }).catch((error) => reject(error));
    })
  };
};

export default Config;