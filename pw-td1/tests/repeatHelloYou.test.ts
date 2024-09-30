import { expect, test } from "bun:test";
import { repeatHelloYou } from "../src/hello-funcs";

test("répete 'Hello, Jean!' quatre fois", () => {
    const res = `Hello, Jean!\nHello, Jean!\nHello, Jean!\nHello, Jean!`;
    expect(repeatHelloYou(4, "Jean")).toBe(res);
})

test("retourne un message d'erreur si name n'est pas un string", () => {
    expect(() => repeatHelloYou(3, 5 as any)).toThrow("Entrez une chaine de caractere !!!");
  });