export default class Transmission {

    #forward_gears;
    #reverse_gear;
    #final_drive;
    #max_gear;

    constructor(forward_gears = [3.587, 2.022, 1.384, 1.0, 0.861], reverse_gear = 4.0, final_drive = 4.3) {
        this.#forward_gears = forward_gears.slice();
        this.#reverse_gear = reverse_gear;
        this.#final_drive = final_drive;
        this.#max_gear = forward_gears.length;
    }

    input_ratio(gear) {
        return this.#final_drive * this.gear_ratio(this.#valid_gear(gear));

    }

    output_ratio(gear) {
        if (this.#valid_gear(gear) == 0) return 0.0;
        return 1.0 / this.input_ratio(this.#valid_gear(gear));
    }

    output_rpm(input_rpm, gear) {
        let or = this.output_ratio(this.#valid_gear(gear));
        return input_rpm * or;
    }

    input_rpm(output_rpm, gear) {
        let ir = this.input_ratio(this.#valid_gear(gear));
        return output_rpm * ir;
    }

    gear_ratio(gear) {
        if (gear == -1) return this.#reverse_gear;
        if (gear == 0) return 0.0;
        return this.#forward_gears[gear - 1];
    }

    max_gear() {
        return this.#max_gear;
    }

    #valid_gear(gear) {

        let gear_out = gear | 0; // convert to int via bitwise OR with zero
        if (gear_out < -1) gear_out = -1;
        if (gear_out > this.#max_gear) gear_out = this.#max_gear;
        return gear_out;
    }

    gear_name(gear) {

        let g_name = this.#valid_gear(gear);
        if (g_name == -1) return "R";
        if (g_name == 0) return "N";
        return g_name.toString();
    }

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
