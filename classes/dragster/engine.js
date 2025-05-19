export default class Engine {
    #torque_curve;
    #rpm_shift;
    #rpm_launch;
    #rpm_max;
    #rpm_min;
    #torque_max;
    #power_max;

    constructor(
        torque_curve = [
            [800, 20],
            [1000, 40],
            [2500, 69],
            [3000, 76],
            [3500, 90],
            [4000, 99],
            [4300, 100.7],
            [5000, 99],
            [6500, 96],
            [7000, 90],
            [7350, 84],
            [7500, 0],
        ],
        rpm_shift = 7350,
        rpm_launch = 1500
    ) {

        this.#torque_curve = torque_curve;
        this.#rpm_shift = rpm_shift;
        this.#rpm_launch = rpm_launch;

        this.#rpm_min = torque_curve[0][0];
        this.#rpm_max = torque_curve[torque_curve.length - 1][0];

        this.#torque_max = 0;
        this.#power_max = 0;

        for (const [rpm, torque] of this.#torque_curve) {
            this.#torque_max = Math.max(this.#torque_max, torque);
            this.#power_max = Math.max(this.#power_max, torque * rpm / 5252);
        }
    }


    #valid_rpm(rpm) {
        if (rpm < this.#rpm_min || rpm > this.#rpm_max) {
            return false;
        } else {
            return true;
        }
    }

    torque(rpm) {
        if (this.#valid_rpm(rpm)) {
            for (let i = 0; i < this.#torque_curve.length - 1; i++) {
                if (rpm >= this.#torque_curve[i][0] && rpm <= this.#torque_curve[i + 1][0]) {
                    const x1 = this.#torque_curve[i][0];
                    const y1 = this.#torque_curve[i][1];
                    const x2 = this.#torque_curve[i + 1][0];
                    const y2 = this.#torque_curve[i + 1][1];

                    // linear interpolation
                    return y1 + (y2 - y1) * ((rpm - x1) / (x2 - x1));
                }
            }
        } else {
            console.log("ERROR: RPM out of range");
        }
        console.log("RPM out of range");

        return 0;
    }

    power(rpm) {
        // convert torque to horsepower with the formula: hp = (torque * rpm) / 5252
        return this.torque(rpm) * rpm / 5252;
    }

    report() {
        console.log("Engine report:");
        console.log("Max Torque: " + this.#torque_max);
        console.log("Max Power: " + this.#power_max);
        console.log("Max RPM: " + this.#rpm_max);
        console.log("Min RPM: " + this.#rpm_min);
        console.log("Shift RPM: " + this.#rpm_shift);
        console.log("Launch RPM: " + this.#rpm_launch);
        console.log("Torque Curve: ");
        for (const [rpm, torque] of this.#torque_curve) {
            const hp = this.power(rpm);
            console.log(`${rpm}  RPM : ${torque} Ft-lb : ${hp} HP`);
        }
    }
}