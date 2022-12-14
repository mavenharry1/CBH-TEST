# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

First was to extract the hash generation part of the code to a separate function called `generateHash`, that helps the code to be easily readable and cleaner. Abstraction of repetitive functionality is the best approach to readable code,

Secondly, renamed the `candidate` variable to `FINAL_PARTITION_KEY` which kind of better depects what it holds.

On the first conditional statement, after checking if `event`. Check if `event.partitionKey` is not set, if true, then generate new has and return it else proceed by input `event.partitionKey` as the `FINAL_PARTITION_KEY`. This flow helps reducing processing time and space consumption without further conditioned checks.

In the `generateHash`, is solely responsible for giving us a sha3 hash. given an input.