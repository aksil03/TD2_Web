export interface IProduct {
    unite: string;   
    // ? pour s'adapter au produit           
    unitPrice?: number;    
    pricePerKg?: number;       
    pricePerLiter?: number;    
    
    // a initialiser dans la classe des different produit
    getPrice(quantity: number): number;
}
