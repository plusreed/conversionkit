/**
 * Convert an integer into binary.
 * @namespace ConversionCore
 */

export default function(int) {
    if (int >= 0) {
        return int.toString(2);
    } else {
        return(~int).toString(2);
    }
};
