import { Starship } from "./Starship";
import * as readline from 'readline';
import type { Planet } from './type/Planet';
import { calculateFlightDurationFromEarth } from "./utils/flightCalculator";
import { Cart } from "./classes/Cart";
import { Citron, HuileOlive, Sucre, TomatesCerise } from "./classes/Cart";

//instance de starship
const prometheus = new Starship('Prometheus', 100000);

// Pour utiliser la console comme moyen de réponse
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// liste des planets
const planets: Planet[] = [];
planets.push({ name: "Mercure", distanceFromEarth: 92000000 });
planets.push({ name: "Vénus", distanceFromEarth: 41000000 });
planets.push({ name: "Mars", distanceFromEarth: 78000000 });
planets.push({ name: "Jupiter", distanceFromEarth: 628000000 });
planets.push({ name: "Saturne", distanceFromEarth: 1275000000 });
planets.push({ name: "Uranus", distanceFromEarth: 2724000000 });
planets.push({ name: "Neptune", distanceFromEarth: 4351000000 });

// distance moyenne
const moyenne = planets.reduce((sum, planet) => sum + planet.distanceFromEarth, 0) / planets.length;

// menu
function mainMenu() {
    console.log("\nÉcrivez le chiffre correspondant à votre choix :");
    console.log("1. Utiliser le vaisseau");
    console.log("2. Utiliser les planètes");
    console.log("3. E-commerce"); 
    console.log("4. Quitter");

    // switch
    rl.question("", (input) => {
        const choix = parseInt(input);
        switch (choix) {
            case 1:
                choixavion(); 
                break;
            case 2:
                choixPlanets();
                break;
            case 3:
                choixEcommerce(); 
                break;
            case 4:
                console.log("\nAurevoir !");
                rl.close(); 
                break;
            default:
                console.log("\nVous ne pouvez que choisir entre ces 4 options désolé !");
                mainMenu();
        }
    });
}

// partie polymorphisme
function choixEcommerce() {
    console.log("\nChoisissez  un chiffre:");
    console.log("1. Nombre total de produits dans le panier");
    console.log("2. Prix des tomates");
    console.log("3. Montant total du panier");
    console.log("4. Retour");

    rl.question("", (input) => {
        const choix = parseInt(input);
        switch (choix) {
            case 1:
                console.log("\n");
                console.log(`Il y a ${total} produit(s) dans le panier.`);
                break;
            case 2:
                console.log("\n");
                console.log(`Les tomates vont vous faire un prix de : ${tomates} €.`);
                break;
            case 3:
                console.log("\n");
                console.log(`Et votre panier aura un prix de : ${somme} €.`);
                break;
            case 4:
                mainMenu(); 
                return; 
            default:
                console.log("\nChoisissez entre les 4 options, désolé !");
        }
    
        choixEcommerce();
    });
}

// partie vaisseau
function choixavion() {
    console.log("\nChoisissez un chiffre:");
    console.log("1. État actuel");
    console.log("2. Décollage");
    console.log("3. Vol");
    console.log("4. Atterrissage");
    console.log("5. Stationner");
    console.log("6. Retour");

    rl.question("Votre choix : ", (input) => {
        const choix = parseInt(input);

        
        if (choix > 6 || choix < 1) {
            console.log('\nChoisissez entre ces 6 options seulement.'); 
            choixavion(); 
        } else {
            switchAvion(choix); 
            if (choix === 6) {
                mainMenu();
            } else {
                choixavion();
            }
        }
    });
}

// Action pour les vaisseaux
function switchAvion(choice: number) {
    try {
        switch (choice) {
            case 1:
                console.log("\n");
                prometheus.displayInfo(); 
                break;

            case 2:
                console.log("\n");
                prometheus.takeOff(); 
                break;

            case 3:
                console.log("\n");
                prometheus.Fly(); 
                break;

            case 4:
                console.log("\n");
                prometheus.Land(); 
                break;

            case 5:
                console.log("\n");
                prometheus.Park(); 
                break;
            
            case 6: 
            break;

            
            default:
                console.log('\nChoix invalide.'); 
                break;
        }

    } catch (error) {
        console.error(`${(error as Error).message}`); 
    }
}



// action pour planets
function choixPlanets() {
    console.log("\nChoisissez votre option de tri :");
    console.log("1. Par distance croissante");
    console.log("2. Par ordre alphabétique croissant");
    console.log("3. Par ordre alphabétique décroissant");
    console.log("4. Afficher la distance moyenne de la Terre aux planètes");
    console.log("5. Calculer la durée de vol depuis la Terre");
    console.log("6. Retour");

    rl.question("", (input) => {
        const choixPlanet = parseInt(input);

        switch (choixPlanet) {
            case 1:
                console.log("\n");
                planets.sort((a, b) => a.distanceFromEarth - b.distanceFromEarth);
                console.log(planets);
                break;

            case 2:
                console.log("\n");
                planets.sort((a, b) => a.name.localeCompare(b.name));
                console.log(planets);
                break;

            case 3:
                console.log("\n");
                planets.sort((a, b) => b.name.localeCompare(a.name));
                console.log(planets);
                break;

            case 4:
                console.log("\n");
                console.log(`La distance moyenne de la Terre par rapport aux autres planètes est de : ${moyenne} km`);
                break;

            case 5:
                console.log("\n");
                choisirPlanetePourDurée(); 
                return;

            case 6:
                console.log("\n");
                mainMenu(); 
                return;

            default:
                console.log("\nChoisissez entre les 5 options, désolé !");
                choixPlanets(); 
                return; 
        }
        choixPlanets(); 
    });
}


// choix planete pour calculer durée depuis terre
function choisirPlanetePourDurée() {
    console.log("\nChoisissez une planète pour calculer la durée de vol :");
    planets.forEach((planet, index) => {
        console.log(`${index + 1}. ${planet.name}`);
    });
    console.log("8. Retour");

    rl.question("", (input) => {
        const choixPlanete = parseInt(input);
        
        if (choixPlanete === 8) {
            choixPlanets();
            return;
        }

        const planet = planets[choixPlanete - 1];
        console.log("\n");

        rl.question("Entrez la vitesse du vaisseau en km/h : ", (vitesse) => {
            const speed = parseFloat(vitesse);

            console.log("\n");
            rl.question("Souhaitez-vous la durée en heures ou en jours ? Ecrivez jours (n'entrez rien pour heures) : ", (choix) => {
                const unity = choix === 'jours' ? 'jours' : undefined;

                console.log("\n");
                const duration = calculateFlightDurationFromEarth(planet, speed, unity);
                console.log(`La durée de vol depuis la Terre vers ${planet.name} est de ${duration} ${unity === 'jours' ? 'jours' : 'heures'}.`);

                console.log("\n");
                choisirPlanetePourDurée();
            });
        });
    });
}


mainMenu();



// instance de carte
const cart = new Cart();

// création aliments
const citron = new Citron(0.5); 
const huileOlive = new HuileOlive(5); 
// il y a un probleme dans l'énoncé, on nous demande une valeur de 3.9 mais aussi de mettre une valeur aléatoire pour le prix du sucre, donc la valeur de 3.9 ne sera pas utilisé dans mon code
const sucre = new Sucre(3.9); 
const tomatesCerise = new TomatesCerise(3.5); 


// ajouter au panier
cart.add(citron, 2); 
cart.add(huileOlive, 1.5); 
cart.add(sucre, 0.5); 
cart.add(citron, 5); 
cart.add(sucre, 3); 
cart.add(tomatesCerise, 1.5); 

// nombre de type de produit dans le panier
let total = 0;
const type: string[] = []; 

for (let i = 0; i < cart['orderLines'].length; i++) {
    const nom = cart['orderLines'][i].produit.constructor.name;

    let found = false;
    for (let j = 0; j < type.length; j++) {
        if (type[j] === nom) {
            found = true;
            break;
        }
    }

    if (!found) {
        type.push(nom);
        total++; 
    }
}

// montant tomates
const tomates = cart.calculateAmountByProduct(tomatesCerise.unite); 

// montant panier
const somme = cart.calculateAmount(); 

