import { describe, test, expect } from "vitest";
import { slugger } from "./index.js";

describe('slugger', () => {
    
    test('returns a slug from one string', () => {
        const actual = slugger('Hello World');
        const expected = 'hello-world';
        expect(actual).toBe(expected);
    });

    
    test('returns a slug from two strings', () => {
        const actual = slugger('Hello World', 'Goodbye World');
        const expected = 'hello-world-goodbye-world';
        expect(actual).toBe(expected);
    });

    test('returns a slug from three strings', () => {
        const actual = slugger('Hello World', 'Goodbye World', 'Hello Again');
        const expected = 'hello-world-goodbye-world-hello-again';
        expect(actual).toBe(expected);
    });

    test('returns a slug from three strings with multiple spaces', () => {
        const actual = slugger(' Hello World ', ' Goodbye  World ', ' Hello    Again ');
        const expected = 'hello-world-goodbye-world-hello-again';
        expect(actual).toBe(expected);
    });

});


    

    /* 
     */
     
    /* 
    */
    
