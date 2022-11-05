const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const INITIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let FINAL_PARTITION_KEY = INITIAL_PARTITION_KEY

  if (event) {
    if (event.partitionKey) {
      FINAL_PARTITION_KEY = event.partitionKey;
    } else {
      return FINAL_PARTITION_KEY = this.generateHash(event)
    }
  }

  if (FINAL_PARTITION_KEY?.length > MAX_PARTITION_KEY_LENGTH) {
    return this.generateHash(FINAL_PARTITION_KEY)
  }
  
  return FINAL_PARTITION_KEY;
};

exports.generateHash = (dataToHash) => {
  if(typeof dataToHash !== "string"){
    dataToHash = JSON.stringify(dataToHash);
  }
  
  return crypto.createHash("sha3-512").update(dataToHash).digest("hex");
};