const { deterministicPartitionKey, generateHash } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Given no input, Returns `0`", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Given an object with `partitionKey` empty, Returns a hash", () => {
    const testValue = {partitionKey: ""}
    const hash = generateHash(testValue)
    const trivialKey = deterministicPartitionKey(testValue);
    expect(trivialKey).toEqual(hash);
  });

  it("Given an object with `partitionKey` not empty, Returns `partitionKey` value", () => {
    const testValue = {partitionKey: "9"}
    const trivialKey = deterministicPartitionKey(testValue);
    expect(trivialKey).toEqual(testValue?.partitionKey);
  });
});
