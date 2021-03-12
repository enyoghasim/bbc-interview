import convertToArray from "../../index"

import jsonData from "../../../data/english.json";

import expected from "./data"

describe("TESTING ALGORITHM", () => {
    test("TESTING IF WE RECIEVED EXPECTED DATA", () => {
        expect(convertToArray(jsonData)).toEqual(expected)
    })
});