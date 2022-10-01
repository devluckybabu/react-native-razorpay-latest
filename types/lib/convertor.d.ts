declare const toDateNumber: (date?: any) => number | "";
declare const toParams: (data?: object | undefined) => string;
declare const getOptions: (params?: any) => any;
declare const orderOptions: (params?: any) => {
    from: string | number;
    to: string | number;
    skip: any;
    count: any;
    authorized: number;
    receipt: any;
} | {
    from?: undefined;
    to?: undefined;
    skip?: undefined;
    count?: undefined;
    authorized?: undefined;
    receipt?: undefined;
};
export { toDateNumber, toParams, getOptions, orderOptions };
