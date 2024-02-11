import capitalize from "./capitalize";
import analyzeArray from "./analyze-array";
import calculator from "./calculator";
import caesarCipher from "./caesar-cipher";
import reverseString from "./reverse-string";

test("Corret 1", () => {
  expect(analyzeArray([1, 1, 1, 1, 1, 1, 1])).toStrictEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 7,
  });
});
test("Corret 2", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
test("Corret 3", () => {
  expect(analyzeArray([0, 1, 1, 3, 5, 8])).toStrictEqual({
    average: 3,
    min: 0,
    max: 8,
    length: 6,
  });
});
test("Corret 5", () => {
  expect(analyzeArray([50, 30, 40, 10, 20])).toStrictEqual({
    average: 30,
    min: 10,
    max: 50,
    length: 5,
  });
});

test("Caesar: Works on gibberish", () => {
  expect(
    caesarCipher("sdajisaudhiuasHDkluSAHdusahUDYaHGWDKUYdgjyktwagDTY", 18)
  ).toBe("kvsbaksmvzamskZVcdmKSZvmkszMVQsZYOVCMQvybqclosyVLQ");
});
test("Caesar: Works", () => {
  expect(
    caesarCipher(
      "If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.",
      7
    )
  ).toBe(
    "Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba."
  );
});
test("Caesar: Works for huge numbers", () => {
  expect(caesarCipher("asdsadsaddsaasdasdasdadsasdasdsad", 5000)).toBe(
    "ialailaillaiialialialilaialialail"
  );
});
test("Caesar: Ignores special characters", () => {
  expect(caesarCipher("AWD[]]#'asd]][d324#'w23eq][#asdwawDAWD", 1)).toBe(
    "BXE[]]#'bte]][e324#'x23fr][#btexbxEBXE"
  );
});

test("Capitalizes the first letter of a string", () => {
  expect(capitalize("john")).toBe("John");
});
test("Does nothing if the first letter is already capitalized", () => {
  expect(capitalize("Nathan")).toBe("Nathan");
});

test("Adds two numbers", () => {
  expect(calculator.add(2, 5)).toBe(7);
});
test("Subtracts two numbers", () => {
  expect(calculator.subtract(455, -255)).toBe(710);
});
test("Multiplies two numbers", () => {
  expect(calculator.multiply(23, 2)).toBe(46);
});
test("Divides two numbers", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("Works on palindromes", () => {
  expect(reverseString("tacocat")).toBe("tacocat");
});
test("Correctly considers case of the string", () => {
  expect(reverseString("gEnEErAtor")).toBe("rotArEEnEg");
});
test("Returns an empty string if no value is passed in", () => {
  expect(reverseString("")).toBe("");
});
