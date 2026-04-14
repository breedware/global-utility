
interface SpaceLocation {
  longitude: number;
  latitude: number;
  allowableDistance: number;
  locationName?: string;
}

export function generateRandomPassword(length: number = 12): string {
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


  export function generateOTP(num: number): string {
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
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371e3; // Earth radius in meters
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

/**
 * check if current location is within approved range
 * @param facilityLocation 
 * @param lat 
 * @param lng 
 * @returns 
 */
export const locatinonWithinRange = (facilityLocation: SpaceLocation, lat: number, lng: number) => {
    if (!facilityLocation.latitude || !facilityLocation.longitude) return null;
    const dist = calculateDistance(lat, lng, facilityLocation.latitude, facilityLocation.longitude);
    const isWithin = dist <= (facilityLocation.allowableDistance || 100);
    return { isWithin, dist, name: facilityLocation.locationName };
}


export const matchedLocations = (facilityLocations: SpaceLocation[], lat: number, lng: number) => {
    const m = facilityLocations
      .map(loc => {
        return locatinonWithinRange(loc, lat, lng);
      })
      .filter((m): m is { isWithin: boolean; dist: number; name: string } => m !== null && m.isWithin)
      .sort((a, b) => a.dist - b.dist); // Get closest if multiple overlap

    return m 
}

// encode url data
// export const urlEncode = (data: Record<string, any>): string => {
//   const jsonString = JSON.stringify(data);
//   // We use encodeURIComponent to handle non-ASCII characters correctly
//   return btoa(encodeURIComponent(jsonString).replace(/%([0-9A-F]{2})/g, (match, p1) => {
//     return String.fromCharCode(parseInt(p1, 16));
//   }));
// };

// export const urlDecode = (encodedString: string): Record<string, any> | null => {
//   try {
//     // 1. Base64 decode using atob
//     const binaryString = atob(encodedString);
    
//     // 2. Convert binary back to URI components to handle non-ASCII/UTF-8 correctly
//     const jsonString = decodeURIComponent(
//       Array.prototype.map.call(binaryString, (char: string) => {
//         return '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2);
//       }).join('')
//     );

//     // 3. Parse JSON back into an object
//     return JSON.parse(jsonString);
//   } catch (error) {
//     console.error("Failed to decode URL data:", error);
//     return null;
//   }
// };


/**
 * Encodes a JSON object into a URL-safe Base64 string.
 * Optimized for Node.js environments.
 */
export const urlEncode = (data: Record<string, any>): string => {
  try {
    const jsonString = JSON.stringify(data);
    
    // We use 'base64url' to ensure the output is safe for URL params.
    // It automatically handles UTF-8 and replaces +, / and =.
    return Buffer.from(jsonString, "utf8").toString("base64url");
  } catch (error) {
      return "";
  }
};

/**
 * Decodes a URL-safe Base64 string back into a JSON object.
 */
export const urlDecode = <T = Record<string, any>>(encodedString: string): T | null => {
  if (!encodedString) return null;

  try {
    const jsonString = Buffer.from(encodedString, "base64url").toString("utf8");
    return JSON.parse(jsonString) as T;
  } catch (error) {
    return null;
  }
};