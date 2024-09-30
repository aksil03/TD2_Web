import { expect, test } from "bun:test";
import { helloHuman } from "../src/hello-funcs";
import type { Human } from "../src/types";

const humainValide: Human = {
    firstname: "Jean",
    lastname: "Dupont",
    birthyear: 1985,
  };

const humainInvalide: Human = {
    firstname: "Jean",
    lastname: "Dupont",
    birthyear: 2025,
};

test("retourne la salutation prévu", () => {
    expect(helloHuman(humainValide)).toBe("Hello, Jean Dupont! You are 39 years old.");
});

test("retourne un message d'erreur pour une valeur incomprise", () => {
  expect(() => helloHuman(humainInvalide)).toThrow("une valeur est incomprise");
});

