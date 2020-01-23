/**
 * Turn an integer into hex.
 * @namespace ConversionCore
 */

export default function(int) {
    if (int < 0) {
        int = 0xFFFFFFFF + int + 1
    }

    return int.toString(16).toUpperCase();
};
