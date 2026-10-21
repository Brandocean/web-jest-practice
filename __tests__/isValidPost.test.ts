import { isValidPost } from "../src/utils/validate.js";

test("devuelve true cuando se proporcionan tanto el título como el contenido", () => {
    expect(isValidPost({title: "Texto corto", content: "Contenido del post"})).toBe(true);
});

test("devuelve false cuando no se proporciona el título", () => {
    expect(isValidPost({title: "", content: "Contenido del post"})).toBe(false);
});

test("devuelve false cuando no se proporciona el contenido", () => {
    expect(isValidPost({title: "Texto corto", content: ""})).toBe(false);
});

test("devuelve false cuando el título contiene solo espacios", () => {
    expect(isValidPost({title: "   ", content: "Contenido del post"})).toBe(false);
});

test("devuelve false cuando el contenido contiene solo espacios", () => {
    expect(isValidPost({title: "Texto corto", content: "   "})).toBe(false);
});