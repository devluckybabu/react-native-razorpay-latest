declare class Config {
    protected merchant_id: string;
    private secret_key;
    constructor(author: {
        merchantId: string;
        secretKey: string;
    });
    protected call: (path: string, options?: object | undefined) => Promise<unknown>;
}
export default Config;
