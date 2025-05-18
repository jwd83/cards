/**
 * @class Transmission
 * @classdesc Simulates a car transmission system with forward and reverse gear ratios, including final drive calculations.
 */
export default class Transmission {

    /** @private @type {number[]} */
    #forward_gears;
    /** @private @type {number} */
    #reverse_gear;
    /** @private @type {number} */
    #final_drive;
    /** @private @type {number} */
    #max_gear;

    /**
     * Creates a new Transmission instance.
     * @param {number[]} forward_gears - Array of forward gear ratios, e.g., [3.587, 2.022, 1.384, 1.0, 0.861].
     * @param {number} reverse_gear - Reverse gear ratio.
     * @param {number} final_drive - Final drive ratio.
     */
    constructor(forward_gears = [3.587, 2.022, 1.384, 1.0, 0.861], reverse_gear = 4.0, final_drive = 4.3) {
        this.#forward_gears = forward_gears.slice();
        this.#reverse_gear = reverse_gear;
        this.#final_drive = final_drive;
        this.#max_gear = forward_gears.length;
    }

    /**
     * Calculates the total input ratio for a given gear (gear ratio × final drive).
     * @param {number} gear - Gear index (-1 for reverse, 0 for neutral, 1-n for forward).
     * @returns {number} Total input ratio.
     */
    input_ratio(gear) {
        return this.#final_drive * this.gear_ratio(this.#valid_gear(gear));
    }

    /**
     * Calculates the output ratio (inverse of input ratio).
     * @param {number} gear - Gear index.
     * @returns {number} Output ratio.
     */
    output_ratio(gear) {
        if (this.#valid_gear(gear) == 0) return 0.0;
        return 1.0 / this.input_ratio(this.#valid_gear(gear));
    }

    /**
     * Calculates output RPM based on input RPM and selected gear.
     * @param {number} input_rpm - Engine RPM.
     * @param {number} gear - Selected gear.
     * @returns {number} Output shaft RPM.
     */
    output_rpm(input_rpm, gear) {
        let or = this.output_ratio(this.#valid_gear(gear));
        return input_rpm * or;
    }

    /**
     * Calculates input RPM required to produce a desired output RPM at a specific gear.
     * @param {number} output_rpm - Output shaft RPM.
     * @param {number} gear - Selected gear.
     * @returns {number} Required engine RPM.
     */
    input_rpm(output_rpm, gear) {
        let ir = this.input_ratio(this.#valid_gear(gear));
        return output_rpm * ir;
    }

    /**
     * Retrieves the gear ratio for a given gear.
     * @param {number} gear - Gear index.
     * @returns {number} Gear ratio.
     */
    gear_ratio(gear) {
        if (gear == -1) return this.#reverse_gear;
        if (gear == 0) return 0.0;
        return this.#forward_gears[gear - 1];
    }

    /**
     * Returns the maximum number of forward gears.
     * @returns {number} Max forward gear count.
     */
    max_forward_gear() {
        return this.#max_gear;
    }

    /**
     * Validates and clamps the gear number within allowed range (-1 to max).
     * @private
     * @param {number} gear - Gear index to validate.
     * @returns {number} Validated gear.
     */
    #valid_gear(gear) {
        let gear_out = gear | 0;
        if (gear_out < -1) gear_out = -1;
        if (gear_out > this.#max_gear) gear_out = this.#max_gear;
        return gear_out;
    }

    /**
     * Returns a user-friendly gear name (e.g., "R", "N", "1", "2", etc.).
     * @param {number} gear - Gear index.
     * @returns {string} Gear name.
     */
    gear_name(gear) {
        let g_name = this.#valid_gear(gear);
        if (g_name == -1) return "R";
        if (g_name == 0) return "N";
        return g_name.toString();
    }

    /**
     * Logs a detailed report of all gear ratios, input/output ratios, and example RPM conversions.
     */
    report() {
        let report = "";
        for (let i = -1; i <= this.#max_gear; i++) {
            report += `Gear ${this.gear_name(i)}: ${this.gear_ratio(i).toFixed(3)}\n`;
            report += `Input Ratio ${this.gear_name(i)}: ${this.input_ratio(i).toFixed(3)}\n`;
            report += `Output Ratio ${this.gear_name(i)}: ${this.output_ratio(i).toFixed(3)}\n`;
            report += `Output RPM @ 1000 input ${this.gear_name(i)}: ${this.output_rpm(1000, i).toFixed(3)}\n`;
            report += `Input RPM @ 1000 output ${this.gear_name(i)}: ${this.input_rpm(1000, i).toFixed(3)}\n\n`;
        }

        console.log(report);
        console.log(`Final Drive Ratio: ${this.#final_drive}`);
        console.log(`Reverse Gear Ratio: ${this.#reverse_gear}`);
        console.log(`Forward Gears: ${this.#forward_gears}`);
        console.log(`Max Forward Gear: ${this.#max_gear}`);
    }
}
