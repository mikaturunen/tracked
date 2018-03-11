export const resolveWithDelay = (value, time = 1000) => new Promise((resolve) => setTimeout(() => resolve(value), time));
export const rangeQueryString = (count, pageNumber) => `limit=${count}&offset=${pageNumber ? pageNumber * count : 0}`;
export const removeKeys = (payload, keys) => {
    keys.forEach((key) => {
        delete payload[key];
    });
    return payload;
};
//# sourceMappingURL=utils.js.map