import cryptoRandomString from 'crypto-random-string';

export const createName = () => {
    // return Math.round(Math.random() * 1e15).toString(36);
    return cryptoRandomString({length: 5, type: 'distinguishable'})
}