export default class Engine {
    #torque_curve;
    #rpm_shift;
    #rpm_launch;
    #rpm_max;
    #rpm_min;
    #torque_max;
    #torque_min;


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

        // find the max torque
        this.#torque_max = torque_curve[0][1];
        for (let i = 1; i < torque_curve.length; i++) {
            this.#torque_max = Math.max(this.#torque_max, torque_curve[i][1]);
        }

    }


    #valid_rpm(rpm) {
        return (rpm < this.#rpm_min || rpm > this.#rpm_max);
    }

    torque(rpm) {
        if (this.#valid_rpm(rpm)) {
            return 0;
        }

        // find the torque at the given rpm
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
        return 0;
    }

    power(rpm) {
        // convert torque to horsepower with the formula: hp = (torque * rpm) / 5252
        return this.torque(rpm) * rpm / 5252;
    }

    report() {
        console.log("Engine report:");
        console.log("Max Torque: " + this.#torque_max);
        console.log("Max RPM: " + this.#rpm_max);
        console.log("Min RPM: " + this.#rpm_min);
        console.log("Shift RPM: " + this.#rpm_shift);
        console.log("Launch RPM: " + this.#rpm_launch);
        console.log("Torque Curve: ");
        for (const [rpm, torque] of this.#torque_curve) {
            power = this.power(rpm);
            console.log(`${rpm}  RPM : ${torque} Ft-lb : ${power} HP`);
        }
    }
}