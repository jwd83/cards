import { Engine } from './engine.js';
import { Transmission } from './transmission.js';
import { Wheel } from './wheel.js';



AIR_DENSITY = 1.225; //  # kg / m ^ 3
KG_TO_LBS = 2.20462; // lbs = kg * 2.20462

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

    }


}

v = new Vehicle();
v.Engine.report();
