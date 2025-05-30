export default class Wheel {

    // Provided wheel dimensions
    #tire_width_mm;
    #aspect_ratio;
    #wheel_diameter_in;

    // Calculated values
    #tire_diameter_in;
    #tire_circumference_in;
    #ratio_rpm_to_mph;

    constructor(tire_width_mm = 335, aspect_ratio = 35, wheel_diameter_in = 17) {
        this.#tire_width_mm = tire_width_mm; // in mm
        this.#aspect_ratio = aspect_ratio; // in %
        this.#wheel_diameter_in = wheel_diameter_in; // in inches

        let tire_ratio = aspect_ratio / 100;

        let tire_sidewall_mm = tire_width_mm * tire_ratio; // in mm
        let tire_sidewall_in = tire_sidewall_mm / 25.4; // in inches

        this.#tire_diameter_in = wheel_diameter_in + (2 * tire_sidewall_in); // in inches
        this.#tire_circumference_in = this.#tire_diameter_in * Math.PI; // in inches

        this.#ratio_rpm_to_mph = (this.#tire_circumference_in * 60) / 63360;

    }

    rpm_to_mph(rpm) {
        return (rpm * this.#ratio_rpm_to_mph);
    }

    mph_to_rpm(mph) {
        return (mph / this.#ratio_rpm_to_mph);
    }

    toString() {
        return `Wheel: ${this.#tire_width_mm}/${this.#aspect_ratio}R${this.#wheel_diameter_in}, Diameter: ${this.#tire_diameter_in.toFixed(2)} in, Circumference: ${this.#tire_circumference_in.toFixed(2)} in`;
    }

    report() {
        console.log(this.toString());
        console.log(`Tire Width: ${this.#tire_width_mm} mm`);
        console.log(`Aspect Ratio: ${this.#aspect_ratio}`);
        console.log(`Wheel Diameter: ${this.#wheel_diameter_in} in`);
        console.log(`Tire Diameter: ${this.#tire_diameter_in.toFixed(2)} in`);
        console.log(`Tire Circumference: ${this.#tire_circumference_in.toFixed(2)} in`);
        console.log(`RPM to MPH Ratio: ${this.#ratio_rpm_to_mph.toFixed(2)}`);

        for (let i = 0; i <= 200; i += 10) {
            let mph = i;
            let rpm = this.mph_to_rpm(mph);
            console.log(`RPM: ${rpm.toFixed(2)} at ${mph} mph`);
        }

        for (let i = 0; i <= 2000; i += 100) {
            let rpm = i;
            let mph = this.rpm_to_mph(rpm);
            console.log(`MPH: ${mph.toFixed(2)} at ${rpm} rpm`);
        }
    }
}