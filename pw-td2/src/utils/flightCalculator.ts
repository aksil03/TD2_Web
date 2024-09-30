import type { Planet } from '../type/Planet';

// calculateur durée
export function calculateFlightDurationFromEarth(planet: Planet, speed: number, unity?: 'heure' | 'jours' ): number {
    const distance = planet.distanceFromEarth; 
    const dureeHeures = distance / speed;

    const dureeJours = dureeHeures / 24; 

 if (unity === 'jours') {
    return dureeJours;
}

return dureeHeures; 
}
