import { SchoolLocation } from "../types/model.types";
export declare function generateRandomPassword(length?: number): string;
export declare function generateOTP(num: number): string;
/**
 * check if current location is within approved range
 * @param schoolLocation
 * @param lat
 * @param lng
 * @returns
 */
export declare const locatinonWithinRange: (schoolLocation: SchoolLocation, lat: number, lng: number) => {
    isWithin: boolean;
    dist: number;
    name: string;
} | null;
export declare const matchedLocations: (schoolLocations: SchoolLocation[], lat: number, lng: number) => {
    isWithin: boolean;
    dist: number;
    name: string;
}[];
export declare const urlEncode: (data: Record<string, any>) => string;
export declare const urlDecode: (encodedString: string) => Record<string, any> | null;
//# sourceMappingURL=index.d.ts.map