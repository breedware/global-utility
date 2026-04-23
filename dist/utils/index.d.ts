interface SpaceLocation {
    longitude: number;
    latitude: number;
    allowableDistance: number;
    locationName?: string;
}
export declare function generateRandomPassword(length?: number): string;
export declare function generateOTP(num: number): string;
/**
 * check if current location is within approved range
 * @param facilityLocation
 * @param lat
 * @param lng
 * @returns
 */
export declare const locatinonWithinRange: (facilityLocation: SpaceLocation, lat: number, lng: number) => {
    isWithin: boolean;
    dist: number;
    name: string | undefined;
} | null;
export declare const matchedLocations: (facilityLocations: SpaceLocation[], lat: number, lng: number) => {
    isWithin: boolean;
    dist: number;
    name: string;
}[];
/**
 * Encodes a JSON object into a URL-safe Base64 string.
 * Optimized for Node.js environments.
 */
export declare const urlEncode: (data: Record<string, any>) => string;
/**
 * Decodes a URL-safe Base64 string back into a JSON object.
 */
export declare const urlDecode: <T = Record<string, any>>(encodedString: string) => T | null;
export declare function generateTransactionReference(prefix: string): string;
export interface DVAInformation {
    accountNumber: string;
    appAccountId: number;
    callbackUrl: string;
    appName: string;
}
export interface DVAFormData {
    accountId: number;
    accountNumber: string;
    amount: number;
    transactionCharge: number;
    transactionReference: string;
    narration: string;
}
export interface FundTransferInformation {
    source: 'balance';
    amount: number;
    reference: string;
    recipient: string;
    reason: string;
    formData: Record<string, any>;
    callbackUrl: string;
}
export declare enum GLOBALTRANSACTION {
    CHECKOUT = "checkout",
    DEPOSIT = "deposit",
    TRANSFER = "transfer"
}
export {};
//# sourceMappingURL=index.d.ts.map