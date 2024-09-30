import { expect, test } from "bun:test";
import { helloYou } from "../src/hello-funcs";


test("retourne 'Hello, John'", () => {
    expect(helloYou("John")).toBe("Hello, John!");
});

test("retourne message d'erreur si ce n'est pas un string", () => {
    expect(() => helloYou(5 as any)).toThrow("Entrez une chaine de caractere !!!");
});


