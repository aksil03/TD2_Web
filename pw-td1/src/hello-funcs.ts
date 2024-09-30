import type { Human } from "./types";

export function helloWorld(): string {
    return "Hello, World!";
}

export function helloYou(name: string): string {
    if (typeof name != 'string') {
         throw new Error('Entrez une chaine de caractere !!!')
    }
    return `Hello, ${name}!`;
}

export function helloHuman(human: Human): string{
    if (
        typeof human.firstname != 'string' ||
        typeof human.lastname != 'string' || 
        typeof human.birthyear != 'number' || human.birthyear > new Date().getFullYear()
    ) {
        throw new Error('une valeur est incomprise');
    }
    return `Hello, ${human.firstname} ${human.lastname}! You are ${new Date().getFullYear() - human.birthyear} years old.`;
}

export function repeatHelloYou(n: number, name:string): string {
    if (typeof name !== 'string') {
        throw new Error('Entrez une chaine de caractere !!!');
    }
    let result = '';
    for (let i = 0; i < n; i++) {
        if (i > 0) result += '\n';
        result += helloYou(name);
    }
    return result;
}