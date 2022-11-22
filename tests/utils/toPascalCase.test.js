import { toPascalCase } from "../../utils/toPascalCase";

describe('toPascalCase', () => {
    test('debe devolver un string',() => {
        expect(typeof toPascalCase('hello')).toBe('string')
    })

    test('al pasarle francesco debe retornar Francesco', () => {
        expect(toPascalCase('francesco')).toBe('Francesco')
    })

    test('al pasarle un valor diferente a un string debe retornar undefined por ejemplo el numero 5',() => {
        expect(toPascalCase(5)).toBeUndefined()
    })

    test('al pasarle varias palabras debe retornar cada una en Pascal Case', () => {
        expect(toPascalCase('hello world today')).toBe('Hello World Today');
    })
})