import Engine from './engine.js';
import Transmission from './transmission.js';
import Wheel from './wheel.js';


const AIR_DENSITY = 1.225; //  # kg / m ^ 3
const KG_TO_LBS = 2.20462; // lbs = kg * 2.20462

export default class Vehicle {
    #engine;
    #transmission;
    #wheel;
    #weight_lbs;
    #weight_kg;
    #drag_coefficient;
    #frontal_area_m2;
    odometer;

    constructor(
        engine = new Engine(),
        transmission = new Transmission(),
        wheel = new Wheel(),
        weight_lbs = 2400,
        drag_coefficient = 0.3,
        frontal_area_m2 = 2
    ) {
        // assign our provided values
        this.#engine = engine;
        this.#transmission = transmission;
        this.#wheel = wheel;
        this.#weight_lbs = weight_lbs;
        this.#drag_coefficient = drag_coefficient;
        this.#frontal_area_m2 = frontal_area_m2;

        // perform conversions
        this.#weight_kg = this.#weight_lbs / KG_TO_LBS; // convert lbs to kg

        // set default values
        this.odometer = 0;
        this.current_gear = 0;
        this.current_mph = 0;
        this.current_rpm = 0;


    }



    report() {
        console.log("--- FULL VEHICLE REPORT ---");
        console.log(`Weight: ${this.#weight_lbs} lbs (${this.#weight_kg} kg)`);
        console.log(`Drag Coefficient: ${this.#drag_coefficient}`);
        console.log(`Frontal Area: ${this.#frontal_area_m2} m^2`);
        console.log(`--- ENGINE REPORT ---`);
        this.#engine.report();
        console.log(`--- TRANSMISSION REPORT ---`);
        this.#transmission.report();
        console.log(`--- WHEEL REPORT ---`);
        this.#wheel.report();
        console.log(`--- END OF VEHICLE REPORT ---`);
    }

}

const v = new Vehicle();
v.report();
// v.Engine = new Engine();
// v.Engine.report();
