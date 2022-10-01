"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderOptions = exports.getOptions = exports.toParams = exports.toDateNumber = void 0;
const toDateNumber = (date) => {
    var _a;
    if (date) {
        const new_date = (_a = new Date(date)) === null || _a === void 0 ? void 0 : _a.getTime();
        const isValid = !isNaN(new_date);
        return isValid ? new_date : '';
    }
    return '';
};
exports.toDateNumber = toDateNumber;
const toParams = (data) => {
    if (data && typeof data == "object") {
        const params = Object.entries(data).map(([key, value]) => `${key}=${value}`).join("&");
        return '?' + params;
    }
    ;
    return '';
};
exports.toParams = toParams;
const getOptions = (params) => {
    if (params && typeof params == "object") {
        const to = toDateNumber(params.to);
        const from = toDateNumber(params.from);
        const skip = typeof params.skip == "number" ? params.skip : 0;
        const count = typeof params.count == "number" ? params.count : 10;
        return (Object.assign(Object.assign({}, params), { from, to, skip, count }));
    }
    return {};
};
exports.getOptions = getOptions;
const orderOptions = (params) => {
    if (params && typeof params == "object") {
        const to = toDateNumber(params.to);
        const from = toDateNumber(params.from);
        const skip = typeof params.skip == "number" ? params.skip : 0;
        const count = typeof params.count == "number" ? params.count : 10;
        const authorized = (params === null || params === void 0 ? void 0 : params.authorized) == true ? 1 : 0;
        const receipt = typeof (params === null || params === void 0 ? void 0 : params.receipt) == "string" ? params === null || params === void 0 ? void 0 : params.receipt : '';
        return ({ from, to, skip, count, authorized, receipt });
    }
    return {};
};
exports.orderOptions = orderOptions;
