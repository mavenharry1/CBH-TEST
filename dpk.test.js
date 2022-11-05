const { deterministicPartitionKey, generateHash } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns an hash when given an input is given", () => {
    const testValues = ["4", 1, "7", "9", 5]
    
    testValues.forEach(value => {
      const hash = generateHash(value)
      const trivialKey = deterministicPartitionKey(value);
      expect(trivialKey).toEqual(hash);
    });
  });
});
