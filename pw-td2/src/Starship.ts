import { v4 } from "uuid";
import validator from 'validator'; 

// classe starship
export class Starship {
    ref: string;
    speed: number;
    status: StarshipStatus;
    id : string;

    constructor(ref: string, speed: number, id?: string) {
        this.ref = ref;
        this.speed = speed;
        this.status = StarshipStatus.PARKED;
        // verification uuid
        if (id) {
            if (!validator.isUUID(id, 4)) {
                throw new Error(`L'ID '${id}' n'est pas un UUID.`);
            }
            this.id = id;
        } else {
            this.id = v4();
        }
    }

    // etat du vaisseau
    displayInfo(): void {
        console.log(` ID: ${this.id}, Starship : ${this.ref}, Speed: ${this.speed}, Status: ${this.status}`);
    }

    // décoller
    takeOff(): void {
        if (this.status == StarshipStatus.PARKED) {
            console.log(`Le vaisseau ${this.ref} est en train de décoller`);
            this.status = StarshipStatus.TAKING_OFF;
        } else {
            throw new Error(`Le vaisseau ${this.ref} ne peut pas décoller car il n'est pas stationné.`);
        }
    }
    
    // garer
    Park(): void {
        if (this.status == StarshipStatus.LANDING) {
            console.log(`Le vaisseau ${this.ref} est en train de stationné`);
            this.status = StarshipStatus.PARKED;
        } else {
            throw new Error(`Le vaisseau ${this.ref} ne peut pas se garer car il n\'est pas entrain d'atterir.`);
        }
    }

    // vol
    Fly(): void {
        if (this.status == StarshipStatus.TAKING_OFF) {
            console.log(`Le vaisseau ${this.ref} est en plein vol`);
            this.status = StarshipStatus.FLYING;
        } else {
            throw new Error(`Le vaisseau ${this.ref} ne peut pas voler car il n'est pas en decollage.`);
        }
    }

    // en cours d'atterissage
    Land(): void {
        if (this.status == StarshipStatus.FLYING) {
            console.log(`Le vaisseau ${this.ref} est en plein vol`);
            this.status = StarshipStatus.LANDING;
        } else {
            throw new Error(`Le vaisseau ${this.ref} ne peut pas atterir car il n'est pas en vol.`);
        }
    }
}

enum StarshipStatus {
    PARKED = 'stationné',
    TAKING_OFF = 'en cours de décollage',
    FLYING = 'en vol',
    LANDING = 'en cours d\'atterrissage'
}


