import type { IProduct } from "../interface/IProduct";
import { v4 } from "uuid";

export class Cart {
    
    
    private orderLines: { id: string; produit: IProduct; qte: number }[] = [];

    // ajouter au panier
    add(produit: IProduct, qte: number): void {

        const orderLine = {
            id: v4(), 
            produit: produit,
            qte: qte
        };

        this.orderLines.push(orderLine);
    }


     // somme d'un produit
     calculateAmount(): number {
        let somme = 0;

        for (let i = 0; i < this.orderLines.length; i++) {
            const line = this.orderLines[i];
            somme += line.produit.getPrice(line.qte);
        }
        return somme; 
    }

     // prix du panier
     calculateAmountByProduct(unitType: string): number {
        let somme = 0;

        for (let i = 0; i < this.orderLines.length; i++) {
            const line = this.orderLines[i];
            
            if (line.produit.unite === unitType) {

                somme += line.produit.getPrice(line.qte);
            }
        }

        return somme; 
    }

      // détails de chaque produit
      displayDetails(): string[] {
        const liste: string[] = [];

        for (const line of this.orderLines) {
            const produit = line.produit;
            const prix = produit.getPrice(line.qte); 
            liste.push(
                `ID: ${line.id}, nom: ${produit.constructor.name}, Prix unitaire: €${produit.unitPrice || produit.pricePerKg || produit.pricePerLiter}, Unité: ${produit.unite}, Quantité: ${line.qte}, Montant: ${prix} €`
            );
        }

        return liste; 
    }

}

 // Classe citron
 export class Citron implements IProduct {
    unite: string = "unité";
    unitPrice: number;

    constructor(prix: number) {
        this.unitPrice = prix;
    }

    getPrice(qte: number): number {
        return this.unitPrice * qte; 
    }
}



// Classe tomates
export class TomatesCerise implements IProduct {
    unite: string = "kg";
    pricePerKg: number;

    constructor(prix: number) {
        this.pricePerKg = prix;
    }

    getPrice(qte: number): number {
        return this.pricePerKg * qte;
    }
}

// Classe huile
export class HuileOlive implements IProduct {
    unite: string = "litre";
    pricePerLiter: number;

    constructor(prix: number) {
        this.pricePerLiter = prix;
    }

    getPrice(qte: number): number {
        return this.pricePerLiter * qte;
    }
}

// Classe sucre
export class Sucre implements IProduct {
    unite: string = "kg";
    unitPrice?: number;

    constructor(prix: number) {
        this.unitPrice = prix; 
    }

    getPrice(qte: number): number {
        // prix entre 0 et 10
        const random = Math.random() * 10; 
        return random * qte; 
    }
}