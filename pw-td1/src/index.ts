import { helloHuman, helloWorld, repeatHelloYou } from "./hello-funcs";
import { helloYou } from "./hello-funcs";
import type { Human } from "./types";

const message = helloWorld();
//console.log(message);

try {
console.log(helloYou("John"));
} catch (error: any) {
    console.error(error.message)
}

try {
    console.log(helloYou(5));
    } catch (error: any) {
        console.error(error.message)
    }
    

const johnDoe: Human = {
    firstname: "John",
    lastname: "Doe",
    birthyear: 1980
};

try {
    console.log(helloHuman(johnDoe));
} catch (error: any) {
    console.error(error.message)
}
    

const johnDoefalse: Human = {
    firstname: "John",
    lastname: "Doe",
    birthyear: 2025
};

try {
    console.log(helloHuman(johnDoefalse));
} catch (error: any) {
    console.error(error.message)
}



try {
    console.log(repeatHelloYou(4, "john"));
} catch (error: any) {
    console.error(error.message)
}

try {
    console.log(repeatHelloYou(4, 3));
} catch (error: any) {
    console.error(error.message)
}