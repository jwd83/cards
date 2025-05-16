export default class Wheel {

    // Provided wheel dimensions
    #tire_width_mm;
    #aspect_ratio;
    #wheel_diameter_in;

    // Calculated wheel dimensions
    #tire_diameter_in;
    #tire_circumference_in;

    constructor(tire_width_mm = 335, aspect_ratio = 35, wheel_diameter_in = 17) {
        this.#tire_width_mm = tire_width_mm; // in mm
        this.#aspect_ratio = aspect_ratio; // in %
        this.#wheel_diameter_in = wheel_diameter_in; // in inches

        let tire_ratio = aspect_ratio / 100;

        let tire_sidewall_mm = tire_width_mm * tire_ratio; // in mm
        let tire_sidewall_in = tire_sidewall_mm / 25.4; // in inches

        this.#tire_diameter_in = wheel_diameter_in + (2 * tire_sidewall_in); // in inches
        this.#tire_circumference_in = this.#tire_diameter_in * Math.PI; // in inches

    }

    rpm_to_mph(rpm) {
        // TODO
    }

    mph_to_rpm(mph) {
        // TODO
    }

    toString() {
        return `Wheel: ${this.#tire_width_mm}/${this.#aspect_ratio}R${this.#wheel_diameter_in}, Diameter: ${this.#tire_diameter_in.toFixed(2)} in, Circumference: ${this.#tire_circumference_in.toFixed(2)} in`;
    }
}