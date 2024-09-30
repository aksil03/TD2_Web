import { expect, test } from "bun:test";
import { helloWorld } from "../src/hello-funcs";

test("retourne 'Hello, World!'", () => {
    expect(helloWorld()).toBe("Hello, World!");
});

