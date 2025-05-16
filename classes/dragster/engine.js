export default class Engine {
    constructor(torque_curve, rpm_shift = 7350, rpm_launch = 1500) {

        this.torque_curve = torque_curve;
        this.rpm_shift = rpm_shift;
        this.rpm_launch = rpm_launch;

    }

    torque(rpm) {

    }

    power(rpm) {
        // convert torque to horsepower with the formula: hp = (torque * rpm) / 5252
        return this.torque(rpm) * rpm / 5252;
    }
}