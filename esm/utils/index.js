"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlDecode = exports.urlEncode = exports.matchedLocations = exports.locatinonWithinRange = void 0;
exports.generateRandomPassword = generateRandomPassword;
exports.generateOTP = generateOTP;
function generateRandomPassword(length = 12) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+{}[]<>?/|";
    const allChars = uppercase + lowercase + numbers + specialChars;
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    for (let i = password.length; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    return password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
}
function generateOTP(num) {
    if (num < 4 || !Number.isInteger(num)) {
        throw new Error("The length of the OTP must be a positive integer greater than or equal to 4.");
    }
    const digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < num; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}
/**
 * Haversine formula to find distance between two points in meters
 */
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Earth radius in meters
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};
/**
 * check if current location is within approved range
 * @param schoolLocation
 * @param lat
 * @param lng
 * @returns
 */
const locatinonWithinRange = (schoolLocation, lat, lng) => {
    if (!schoolLocation.latitude || !schoolLocation.longitude)
        return null;
    const dist = calculateDistance(lat, lng, schoolLocation.latitude, schoolLocation.longitude);
    const isWithin = dist <= (schoolLocation.allowableDistance || 100);
    return { isWithin, dist, name: schoolLocation.locationName };
};
exports.locatinonWithinRange = locatinonWithinRange;
const matchedLocations = (schoolLocations, lat, lng) => {
    const m = schoolLocations
        .map(loc => {
        return (0, exports.locatinonWithinRange)(loc, lat, lng);
    })
        .filter((m) => m !== null && m.isWithin)
        .sort((a, b) => a.dist - b.dist); // Get closest if multiple overlap
    return m;
};
exports.matchedLocations = matchedLocations;
// encode url data
const urlEncode = (data) => {
    const jsonString = JSON.stringify(data);
    // We use encodeURIComponent to handle non-ASCII characters correctly
    return btoa(encodeURIComponent(jsonString).replace(/%([0-9A-F]{2})/g, (match, p1) => {
        return String.fromCharCode(parseInt(p1, 16));
    }));
};
exports.urlEncode = urlEncode;
const urlDecode = (encodedString) => {
    try {
        // 1. Base64 decode using atob
        const binaryString = atob(encodedString);
        // 2. Convert binary back to URI components to handle non-ASCII/UTF-8 correctly
        const jsonString = decodeURIComponent(Array.prototype.map.call(binaryString, (char) => {
            return '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        // 3. Parse JSON back into an object
        return JSON.parse(jsonString);
    }
    catch (error) {
        console.error("Failed to decode URL data:", error);
        return null;
    }
};
exports.urlDecode = urlDecode;
//# sourceMappingURL=index.js.map