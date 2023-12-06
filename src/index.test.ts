import { describe, test, expect } from "vitest";
import { slugger } from "./index.js";

describe('slugger', () => {
    
    test('returns a slug from one string', () => {
        const actual = slugger('Hello World');
        const expected = 'hello-world';
        expect(actual).toBe(expected);
    });

});
