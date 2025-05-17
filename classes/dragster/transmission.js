/*
A reimplementation of my Transmission class in Python.

class Transmission:
    def __init__(
        self,
        forward_gears: list = [3.587, 2.022, 1.384, 1.0, 0.861],
        reverse_gear: float = 4.0,
        final_drive: float = 4.3,
    ):
        self.forward_gears = forward_gears.copy()
        self.reverse_gear = reverse_gear
        self.final_drive = final_drive
        self.max_gear = len(forward_gears)

    def output_rpm(self, input_rpm: float, gear: int) -> float:
        o_r = self.output_ratio(gear)
        return input_rpm * o_r

    def output_ratio(self, gear: int) -> float:
        ir = self.input_ratio(gear)
        if ir == 0.0:
            return 0.0
        return 1.0 / ir

    def input_rpm(self, output_rpm: float, gear: int) -> float:
        ir = self.input_ratio(gear)
        return output_rpm * ir

    def input_ratio(self, gear: int) -> float:
        return self.final_drive * self.gear_ratio(gear)

    def gear_ratio(self, gear: int) -> float:

        if gear == -1:
            return self.reverse_gear
        elif gear == 0:
            return 0.0
        elif 1 <= gear <= self.max_gear:
            return self.forward_gears[gear - 1]
        else:
            raise ValueError(
                f"Invalid gear: {gear}: int. Must be between -1 and {self.max_gear}."
            )

    def gear_name(self, gear: int) -> str:
        if gear == -1:
            return "R"
        elif gear == 0:
            return "N"
        elif 1 <= gear <= self.max_gear:
            return f"{gear}"
        else:
            raise ValueError(
                f"Invalid gear: {gear}: int. Must be between -1 and {self.max_gear}."
            )


if __name__ == "__main__":
    # Example usage
    t = Transmission()
    for i in range(-1, 6):
        orpm = t.output_rpm(1000, i)
        print(f"Gear {t.gear_name(i)}: {t.gear_ratio(i):.3f}")
        print(f"Input Ratio {t.gear_name(i)}: {t.input_ratio(i):.3f}")
        print(f"Output Ratio {t.gear_name(i)}: {t.output_ratio(i):.3f}")
        print(f"Output RPM @ 1000 input {t.gear_name(i)}: {orpm:.3f}")
        print(
            f"Input RPM @ output RPM {orpm:.3f} {t.gear_name(i)}: {t.input_rpm(orpm, i):.3f}"
        )

        print("")

    print("Final Drive Ratio:", t.final_drive)


*/

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
        return this.#final_drive * this.gear_ratio(gear);

    }

    output_ratio(gear) {

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

        if (gear_out < -1) gear_out = -1;
        if (gear_out > this.#max_gear) gear_out = this.#max_gear;
    }

}

let t = new Transmission(
    [3.587, 2.022, 1.384, 1.0, 0.861],
    4.0,
    4.3
);

console.log(t.max_gear());